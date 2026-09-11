# `openflowDeploymentByoc` Submodule <a name="`openflowDeploymentByoc` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentByoc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentByoc <a name="OpenflowDeploymentByoc" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc snowflake_openflow_deployment_byoc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByoc(scope Construct, id *string, config OpenflowDeploymentByocConfig) OpenflowDeploymentByoc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig">OpenflowDeploymentByocConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig">OpenflowDeploymentByocConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname">ResetCustomIngressHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable">ResetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink">ResetUsePrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink">ResetUseUserAuthOverPrivatelink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts"></a>

```go
func PutTimeouts(value OpenflowDeploymentByocTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCustomIngressHostname` <a name="ResetCustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname"></a>

```go
func ResetCustomIngressHostname()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEventTable` <a name="ResetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable"></a>

```go
func ResetEventTable()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUsePrivateLink` <a name="ResetUsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink"></a>

```go
func ResetUsePrivateLink()
```

##### `ResetUseUserAuthOverPrivatelink` <a name="ResetUseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink"></a>

```go
func ResetUseUserAuthOverPrivatelink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.OpenflowDeploymentByoc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.OpenflowDeploymentByoc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.OpenflowDeploymentByoc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.OpenflowDeploymentByoc_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpenflowDeploymentByoc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpenflowDeploymentByoc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentByoc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput">CustomIngressHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput">EventTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput">UsePrivateLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput">UseUserAuthOverPrivatelinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput">VpcTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable">EventTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink">UsePrivateLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink">UseUserAuthOverPrivatelink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput"></a>

```go
func DescribeOutput() OpenflowDeploymentByocDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters"></a>

```go
func Parameters() OpenflowDeploymentByocParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput"></a>

```go
func ShowOutput() OpenflowDeploymentByocShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts"></a>

```go
func Timeouts() OpenflowDeploymentByocTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CustomIngressHostnameInput`<sup>Optional</sup> <a name="CustomIngressHostnameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput"></a>

```go
func CustomIngressHostnameInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EventTableInput`<sup>Optional</sup> <a name="EventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput"></a>

```go
func EventTableInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsePrivateLinkInput`<sup>Optional</sup> <a name="UsePrivateLinkInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput"></a>

```go
func UsePrivateLinkInput() *string
```

- *Type:* *string

---

##### `UseUserAuthOverPrivatelinkInput`<sup>Optional</sup> <a name="UseUserAuthOverPrivatelinkInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput"></a>

```go
func UseUserAuthOverPrivatelinkInput() *string
```

- *Type:* *string

---

##### `VpcTypeInput`<sup>Optional</sup> <a name="VpcTypeInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput"></a>

```go
func VpcTypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable"></a>

```go
func EventTable() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink"></a>

```go
func UsePrivateLink() *string
```

- *Type:* *string

---

##### `UseUserAuthOverPrivatelink`<sup>Required</sup> <a name="UseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink"></a>

```go
func UseUserAuthOverPrivatelink() *string
```

- *Type:* *string

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentByocConfig <a name="OpenflowDeploymentByocConfig" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

&openflowdeploymentbyoc.OpenflowDeploymentByocConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	VpcType: *string,
	Comment: *string,
	CustomIngressHostname: *string,
	DisplayName: *string,
	EventTable: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts,
	UsePrivateLink: *string,
	UseUserAuthOverPrivatelink: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType">VpcType</a></code> | <code>*string</code> | Specifies whether the deployment's VPC is created by Snowflake or supplied by you. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | Specifies a custom hostname for ingress into the deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable">EventTable</a></code> | <code>*string</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink">UsePrivateLink</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink">UseUserAuthOverPrivatelink</a></code> | <code>*string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#name OpenflowDeploymentByoc#name}

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType"></a>

```go
VpcType *string
```

- *Type:* *string

Specifies whether the deployment's VPC is created by Snowflake or supplied by you.

Valid values are (case-insensitive): `MANAGED` | `PROVIDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#vpc_type OpenflowDeploymentByoc#vpc_type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#comment OpenflowDeploymentByoc#comment}

---

##### `CustomIngressHostname`<sup>Optional</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname"></a>

```go
CustomIngressHostname *string
```

- *Type:* *string

Specifies a custom hostname for ingress into the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#custom_ingress_hostname OpenflowDeploymentByoc#custom_ingress_hostname}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#display_name OpenflowDeploymentByoc#display_name}

---

##### `EventTable`<sup>Optional</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable"></a>

```go
EventTable *string
```

- *Type:* *string

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#event_table OpenflowDeploymentByoc#event_table}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts"></a>

```go
Timeouts OpenflowDeploymentByocTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#timeouts OpenflowDeploymentByoc#timeouts}

---

##### `UsePrivateLink`<sup>Optional</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink"></a>

```go
UsePrivateLink *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_private_link OpenflowDeploymentByoc#use_private_link}

---

##### `UseUserAuthOverPrivatelink`<sup>Optional</sup> <a name="UseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink"></a>

```go
UseUserAuthOverPrivatelink *string
```

- *Type:* *string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_user_auth_over_privatelink OpenflowDeploymentByoc#use_user_auth_over_privatelink}

---

### OpenflowDeploymentByocDescribeOutput <a name="OpenflowDeploymentByocDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

&openflowdeploymentbyoc.OpenflowDeploymentByocDescribeOutput {

}
```


### OpenflowDeploymentByocParameters <a name="OpenflowDeploymentByocParameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

&openflowdeploymentbyoc.OpenflowDeploymentByocParameters {

}
```


### OpenflowDeploymentByocParametersEventTable <a name="OpenflowDeploymentByocParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

&openflowdeploymentbyoc.OpenflowDeploymentByocParametersEventTable {

}
```


### OpenflowDeploymentByocShowOutput <a name="OpenflowDeploymentByocShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

&openflowdeploymentbyoc.OpenflowDeploymentByocShowOutput {

}
```


### OpenflowDeploymentByocTimeouts <a name="OpenflowDeploymentByocTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

&openflowdeploymentbyoc.OpenflowDeploymentByocTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentByocDescribeOutputList <a name="OpenflowDeploymentByocDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentByocDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentByocDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentByocDescribeOutputOutputReference <a name="OpenflowDeploymentByocDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentByocDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink"></a>

```go
func UsePrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```go
func UseUserAuthOverPrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentByocDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a>

---


### OpenflowDeploymentByocParametersEventTableList <a name="OpenflowDeploymentByocParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocParametersEventTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentByocParametersEventTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentByocParametersEventTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentByocParametersEventTableOutputReference <a name="OpenflowDeploymentByocParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocParametersEventTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentByocParametersEventTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentByocParametersEventTable
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a>

---


### OpenflowDeploymentByocParametersList <a name="OpenflowDeploymentByocParametersList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentByocParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentByocParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentByocParametersOutputReference <a name="OpenflowDeploymentByocParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentByocParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable">EventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable"></a>

```go
func EventTable() OpenflowDeploymentByocParametersEventTableList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentByocParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a>

---


### OpenflowDeploymentByocShowOutputList <a name="OpenflowDeploymentByocShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowDeploymentByocShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get"></a>

```go
func Get(index *f64) OpenflowDeploymentByocShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowDeploymentByocShowOutputOutputReference <a name="OpenflowDeploymentByocShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowDeploymentByocShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType">VpcType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname"></a>

```go
func CustomIngressHostname() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink"></a>

```go
func UsePrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```go
func UseUserAuthOverPrivateLink() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType"></a>

```go
func VpcType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowDeploymentByocShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a>

---


### OpenflowDeploymentByocTimeoutsOutputReference <a name="OpenflowDeploymentByocTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowdeploymentbyoc"

openflowdeploymentbyoc.NewOpenflowDeploymentByocTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpenflowDeploymentByocTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



