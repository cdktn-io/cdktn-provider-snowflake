# `openflowConnector` Submodule <a name="`openflowConnector` Submodule" id="@cdktn/provider-snowflake.openflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowConnector <a name="OpenflowConnector" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector snowflake_openflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnector(scope Construct, id *string, config OpenflowConnectorConfig) OpenflowConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig">OpenflowConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig">OpenflowConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom">PutFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFrom` <a name="PutFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom"></a>

```go
func PutFrom(value OpenflowConnectorFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts"></a>

```go
func PutTimeouts(value OpenflowConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetComment"></a>

```go
func ResetComment()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.OpenflowConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.OpenflowConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.OpenflowConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.OpenflowConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpenflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpenflowConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpenflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from">From</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput">FromInput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.describeOutput"></a>

```go
func DescribeOutput() OpenflowConnectorDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList">OpenflowConnectorDescribeOutputList</a>

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.from"></a>

```go
func From() OpenflowConnectorFromOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference">OpenflowConnectorFromOutputReference</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.showOutput"></a>

```go
func ShowOutput() OpenflowConnectorShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList">OpenflowConnectorShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeouts"></a>

```go
func Timeouts() OpenflowConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference">OpenflowConnectorTimeoutsOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.fromInput"></a>

```go
func FromInput() OpenflowConnectorFrom
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowConnectorConfig <a name="OpenflowConnectorConfig" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

&openflowconnector.OpenflowConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	From: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.openflowConnector.OpenflowConnectorFrom,
	Name: *string,
	Runtime: *string,
	Schema: *string,
	Comment: *string,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.openflowConnector.OpenflowConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database">Database</a></code> | <code>*string</code> | The database in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from">From</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the Openflow connector; |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime">Runtime</a></code> | <code>*string</code> | Specifies the fully qualified name of the Openflow runtime the connector runs in. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema">Schema</a></code> | <code>*string</code> | The schema in which to create the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the Openflow connector. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The database in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#database OpenflowConnector#database}

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.from"></a>

```go
From OpenflowConnectorFrom
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#from OpenflowConnector#from}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the Openflow connector;

must be unique for the schema in which the connector is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#name OpenflowConnector#name}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Specifies the fully qualified name of the Openflow runtime the connector runs in.

The connector is created in the runtime's schema, so `database` and `schema` must match it. Snowflake has no ALTER for it, so changing it recreates the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#runtime OpenflowConnector#runtime}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

The schema in which to create the Openflow connector.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#schema OpenflowConnector#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the Openflow connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#comment OpenflowConnector#comment}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A free-text alias for the connector. Shown in the Openflow UI in place of the connector's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#display_name OpenflowConnector#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#id OpenflowConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorConfig.property.timeouts"></a>

```go
Timeouts OpenflowConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts">OpenflowConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#timeouts OpenflowConnector#timeouts}

---

### OpenflowConnectorDescribeOutput <a name="OpenflowConnectorDescribeOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

&openflowconnector.OpenflowConnectorDescribeOutput {

}
```


### OpenflowConnectorFrom <a name="OpenflowConnectorFrom" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

&openflowconnector.OpenflowConnectorFrom {
	Definition: *string,
	Path: *string,
	Stage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition">Definition</a></code> | <code>*string</code> | Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path">Path</a></code> | <code>*string</code> | Path to the bundle within the stage. The bundle's root is used when omitted. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage">Stage</a></code> | <code>*string</code> | Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Catalog definition ID for the connector type, for example `OPENFLOW_POSTGRES_CDC`.

List the available IDs with the `snowflake_openflow_connector_definitions` data source. A connector created this way is a draft: it settles on STOPPED and stays there until a configuration version is committed, which this resource does not do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#definition OpenflowConnector#definition}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to the bundle within the stage. The bundle's root is used when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#path OpenflowConnector#path}

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Identifier of a stage holding a complete configuration bundle, which is how a connector arrives already configured and able to start without a commit.

A git repository stage works here too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#stage OpenflowConnector#stage}

---

### OpenflowConnectorShowOutput <a name="OpenflowConnectorShowOutput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

&openflowconnector.OpenflowConnectorShowOutput {

}
```


### OpenflowConnectorTimeouts <a name="OpenflowConnectorTimeouts" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

&openflowconnector.OpenflowConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#create OpenflowConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#delete OpenflowConnector#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#read OpenflowConnector#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_connector#update OpenflowConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowConnectorDescribeOutputList <a name="OpenflowConnectorDescribeOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnectorDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowConnectorDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get"></a>

```go
func Get(index *f64) OpenflowConnectorDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowConnectorDescribeOutputOutputReference <a name="OpenflowConnectorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnectorDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowConnectorDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition">ConnectorDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl">ConnectorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias">DefaultVersionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash">DefaultVersionGitCommitHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri">DefaultVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName">DefaultVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">DefaultVersionSourceLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias">LastVersionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash">LastVersionGitCommitHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri">LastVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName">LastVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri">LastVersionSourceLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri">LiveVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConnectorDefinition`<sup>Required</sup> <a name="ConnectorDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorDefinition"></a>

```go
func ConnectorDefinition() *string
```

- *Type:* *string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.connectorUrl"></a>

```go
func ConnectorUrl() *string
```

- *Type:* *string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersion"></a>

```go
func DefaultVersion() *string
```

- *Type:* *string

---

##### `DefaultVersionAlias`<sup>Required</sup> <a name="DefaultVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```go
func DefaultVersionAlias() *string
```

- *Type:* *string

---

##### `DefaultVersionGitCommitHash`<sup>Required</sup> <a name="DefaultVersionGitCommitHash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```go
func DefaultVersionGitCommitHash() *string
```

- *Type:* *string

---

##### `DefaultVersionLocationUri`<sup>Required</sup> <a name="DefaultVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```go
func DefaultVersionLocationUri() *string
```

- *Type:* *string

---

##### `DefaultVersionName`<sup>Required</sup> <a name="DefaultVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionName"></a>

```go
func DefaultVersionName() *string
```

- *Type:* *string

---

##### `DefaultVersionSourceLocationUri`<sup>Required</sup> <a name="DefaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```go
func DefaultVersionSourceLocationUri() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LastVersionAlias`<sup>Required</sup> <a name="LastVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionAlias"></a>

```go
func LastVersionAlias() *string
```

- *Type:* *string

---

##### `LastVersionGitCommitHash`<sup>Required</sup> <a name="LastVersionGitCommitHash" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```go
func LastVersionGitCommitHash() *string
```

- *Type:* *string

---

##### `LastVersionLocationUri`<sup>Required</sup> <a name="LastVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```go
func LastVersionLocationUri() *string
```

- *Type:* *string

---

##### `LastVersionName`<sup>Required</sup> <a name="LastVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionName"></a>

```go
func LastVersionName() *string
```

- *Type:* *string

---

##### `LastVersionSourceLocationUri`<sup>Required</sup> <a name="LastVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```go
func LastVersionSourceLocationUri() *string
```

- *Type:* *string

---

##### `LiveVersionLocationUri`<sup>Required</sup> <a name="LiveVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```go
func LiveVersionLocationUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowConnectorDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorDescribeOutput">OpenflowConnectorDescribeOutput</a>

---


### OpenflowConnectorFromOutputReference <a name="OpenflowConnectorFromOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnectorFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpenflowConnectorFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetStage` <a name="ResetStage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.resetStage"></a>

```go
func ResetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFromOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowConnectorFrom
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorFrom">OpenflowConnectorFrom</a>

---


### OpenflowConnectorShowOutputList <a name="OpenflowConnectorShowOutputList" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnectorShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpenflowConnectorShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get"></a>

```go
func Get(index *f64) OpenflowConnectorShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpenflowConnectorShowOutputOutputReference <a name="OpenflowConnectorShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnectorShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpenflowConnectorShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition">ConnectorDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl">ConnectorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias">DefaultVersionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri">DefaultVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName">DefaultVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri">DefaultVersionSourceLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri">LiveVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConnectorDefinition`<sup>Required</sup> <a name="ConnectorDefinition" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorDefinition"></a>

```go
func ConnectorDefinition() *string
```

- *Type:* *string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.connectorUrl"></a>

```go
func ConnectorUrl() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersion"></a>

```go
func DefaultVersion() *string
```

- *Type:* *string

---

##### `DefaultVersionAlias`<sup>Required</sup> <a name="DefaultVersionAlias" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionAlias"></a>

```go
func DefaultVersionAlias() *string
```

- *Type:* *string

---

##### `DefaultVersionLocationUri`<sup>Required</sup> <a name="DefaultVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```go
func DefaultVersionLocationUri() *string
```

- *Type:* *string

---

##### `DefaultVersionName`<sup>Required</sup> <a name="DefaultVersionName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionName"></a>

```go
func DefaultVersionName() *string
```

- *Type:* *string

---

##### `DefaultVersionSourceLocationUri`<sup>Required</sup> <a name="DefaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```go
func DefaultVersionSourceLocationUri() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LiveVersionLocationUri`<sup>Required</sup> <a name="LiveVersionLocationUri" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.liveVersionLocationUri"></a>

```go
func LiveVersionLocationUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() OpenflowConnectorShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorShowOutput">OpenflowConnectorShowOutput</a>

---


### OpenflowConnectorTimeoutsOutputReference <a name="OpenflowConnectorTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/openflowconnector"

openflowconnector.NewOpenflowConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpenflowConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowConnector.OpenflowConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



