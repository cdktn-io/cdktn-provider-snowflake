# `openflowRuntime` Submodule <a name="`openflowRuntime` Submodule" id="@cdktn/provider-snowflake.openflowRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowRuntime <a name="OpenflowRuntime" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime snowflake_openflow_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.NewOpenflowRuntime(scope Construct, id *string, config OpenflowRuntimeConfig) OpenflowRuntime
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig">OpenflowRuntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig">OpenflowRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations">ResetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts"></a>

```go
func PutTimeouts(value OpenflowRuntimeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalAccessIntegrations` <a name="ResetExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetExternalAccessIntegrations"></a>

```go
func ResetExternalAccessIntegrations()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.OpenflowRuntime_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.OpenflowRuntime_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.OpenflowRuntime_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.OpenflowRuntime_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpenflowRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpenflowRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpenflowRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput">DeploymentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput">ExecuteAsRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput">ExternalAccessIntegrationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput">MaxNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput">MinNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole">ExecuteAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.describeOutput"></a>

```go
func DescribeOutput() OpenflowRuntimeDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList">OpenflowRuntimeDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.showOutput"></a>

```go
func ShowOutput() OpenflowRuntimeShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList">OpenflowRuntimeShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeouts"></a>

```go
func Timeouts() OpenflowRuntimeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference">OpenflowRuntimeTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deploymentInput"></a>

```go
func DeploymentInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecuteAsRoleInput`<sup>Optional</sup> <a name="ExecuteAsRoleInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRoleInput"></a>

```go
func ExecuteAsRoleInput() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrationsInput`<sup>Optional</sup> <a name="ExternalAccessIntegrationsInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrationsInput"></a>

```go
func ExternalAccessIntegrationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodesInput"></a>

```go
func MaxNodesInput() *f64
```

- *Type:* *f64

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodesInput"></a>

```go
func MinNodesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.executeAsRole"></a>

```go
func ExecuteAsRole() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntime.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowRuntimeConfig <a name="OpenflowRuntimeConfig" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

&openflowruntime.OpenflowRuntimeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	Deployment: *string,
	ExecuteAsRole: *string,
	MaxNodes: *f64,
	MinNodes: *f64,
	Name: *string,
	NodeType: *string,
	Schema: *string,
	Comment: *string,
	DisplayName: *string,
	ExternalAccessIntegrations: *[]*string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.openflowRuntime.OpenflowRuntimeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment">Deployment</a></code> | <code>*string</code> | Specifies the Openflow deployment the runtime runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole">ExecuteAsRole</a></code> | <code>*string</code> | Specifies the role the runtime executes as. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes">MinNodes</a></code> | <code>*f64</code> | Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime). |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Openflow runtime; |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Specifies the size of the runtime's nodes. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Openflow runtime. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | Specifies the names of the external access integrations that allow the runtime egress to external data sources. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#database OpenflowRuntime#database}

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.deployment"></a>

```go
Deployment *string
```

- *Type:* *string

Specifies the Openflow deployment the runtime runs in.

Snowflake has no ALTER for it, so changing it recreates the runtime. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#deployment OpenflowRuntime#deployment}

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.executeAsRole"></a>

```go
ExecuteAsRole *string
```

- *Type:* *string

Specifies the role the runtime executes as.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#execute_as_role OpenflowRuntime#execute_as_role}

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.maxNodes"></a>

```go
MaxNodes *f64
```

- *Type:* *f64

Specifies the maximum number of nodes the runtime scales up to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#max_nodes OpenflowRuntime#max_nodes}

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.minNodes"></a>

```go
MinNodes *f64
```

- *Type:* *f64

Specifies the minimum number of nodes the runtime scales down to. For more information, check [CREATE OPENFLOW RUNTIME documentation](https://docs.snowflake.com/en/sql-reference/sql/create-openflow-runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#min_nodes OpenflowRuntime#min_nodes}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Openflow runtime;

must be unique for the schema in which the runtime is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#name OpenflowRuntime#name}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Specifies the size of the runtime's nodes.

Snowflake has no ALTER for it, so changing it recreates the runtime. Valid values are (case-insensitive): `SMALL` | `MEDIUM` | `LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#node_type OpenflowRuntime#node_type}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the Openflow runtime.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#schema OpenflowRuntime#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Openflow runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#comment OpenflowRuntime#comment}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A free-text alias for the runtime. Shown in the Openflow UI in place of the runtime's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#display_name OpenflowRuntime#display_name}

---

##### `ExternalAccessIntegrations`<sup>Optional</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.externalAccessIntegrations"></a>

```go
ExternalAccessIntegrations *[]*string
```

- *Type:* *[]*string

Specifies the names of the external access integrations that allow the runtime egress to external data sources.

Supported for Snowflake-managed deployments only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#external_access_integrations OpenflowRuntime#external_access_integrations}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#id OpenflowRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeConfig.property.timeouts"></a>

```go
Timeouts OpenflowRuntimeTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts">OpenflowRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#timeouts OpenflowRuntime#timeouts}

---

### OpenflowRuntimeDescribeOutput <a name="OpenflowRuntimeDescribeOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

&openflowruntime.OpenflowRuntimeDescribeOutput {

}
```


### OpenflowRuntimeShowOutput <a name="OpenflowRuntimeShowOutput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

&openflowruntime.OpenflowRuntimeShowOutput {

}
```


### OpenflowRuntimeTimeouts <a name="OpenflowRuntimeTimeouts" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

&openflowruntime.OpenflowRuntimeTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#create OpenflowRuntime#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#delete OpenflowRuntime#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#read OpenflowRuntime#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_runtime#update OpenflowRuntime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowRuntimeDescribeOutputList <a name="OpenflowRuntimeDescribeOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.NewOpenflowRuntimeDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowRuntimeDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get"></a>

```go
func Get(index *f64) OpenflowRuntimeDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowRuntimeDescribeOutputOutputReference <a name="OpenflowRuntimeDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.NewOpenflowRuntimeDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowRuntimeDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole">ExecuteAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended">InitiallySuspended</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier">NodeTypeTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl">ServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.executeAsRole"></a>

```go
func ExecuteAsRole() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.initiallySuspended"></a>

```go
func InitiallySuspended() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NodeTypeTier`<sup>Required</sup> <a name="NodeTypeTier" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.nodeTypeTier"></a>

```go
func NodeTypeTier() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.serverUrl"></a>

```go
func ServerUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowRuntimeDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeDescribeOutput">OpenflowRuntimeDescribeOutput</a>

---


### OpenflowRuntimeShowOutputList <a name="OpenflowRuntimeShowOutputList" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.NewOpenflowRuntimeShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowRuntimeShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get"></a>

```go
func Get(index *f64) OpenflowRuntimeShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowRuntimeShowOutputOutputReference <a name="OpenflowRuntimeShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.NewOpenflowRuntimeShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowRuntimeShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole">ExecuteAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended">InitiallySuspended</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.executeAsRole"></a>

```go
func ExecuteAsRole() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.initiallySuspended"></a>

```go
func InitiallySuspended() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowRuntimeShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeShowOutput">OpenflowRuntimeShowOutput</a>

---


### OpenflowRuntimeTimeoutsOutputReference <a name="OpenflowRuntimeTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowruntime"

openflowruntime.NewOpenflowRuntimeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpenflowRuntimeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowRuntime.OpenflowRuntimeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



