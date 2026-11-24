# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktn/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.NewFailoverGroup(scope Construct, id *string, config FailoverGroupConfig) FailoverGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">ResetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes">ResetAllowedExternalVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">ResetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">ResetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration">ResetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">ResetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh">ResetOptimizedRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">ResetReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance">ResetRpoAssurance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts"></a>

```go
func PutTimeouts(value FailoverGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `ResetAllowedDatabases` <a name="ResetAllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```go
func ResetAllowedDatabases()
```

##### `ResetAllowedExternalVolumes` <a name="ResetAllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes"></a>

```go
func ResetAllowedExternalVolumes()
```

##### `ResetAllowedIntegrationTypes` <a name="ResetAllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```go
func ResetAllowedIntegrationTypes()
```

##### `ResetAllowedShares` <a name="ResetAllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```go
func ResetAllowedShares()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment"></a>

```go
func ResetComment()
```

##### `ResetErrorIntegration` <a name="ResetErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration"></a>

```go
func ResetErrorIntegration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreEditionCheck` <a name="ResetIgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```go
func ResetIgnoreEditionCheck()
```

##### `ResetOptimizedRefresh` <a name="ResetOptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh"></a>

```go
func ResetOptimizedRefresh()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetReplicationSchedule` <a name="ResetReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```go
func ResetReplicationSchedule()
```

##### `ResetRpoAssurance` <a name="ResetRpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance"></a>

```go
func ResetRpoAssurance()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.FailoverGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.FailoverGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.FailoverGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.FailoverGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FailoverGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary">IsPrimary</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">AllowedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">AllowedDatabasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput">AllowedExternalVolumesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">AllowedIntegrationTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">AllowedSharesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput">ErrorIntegrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">IgnoreEditionCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">ObjectTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput">OptimizedRefreshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput">RpoAssuranceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">AllowedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">AllowedDatabases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes">AllowedExternalVolumes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">AllowedShares</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration">ErrorIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">ObjectTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh">OptimizedRefresh</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance">RpoAssurance</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput"></a>

```go
func ShowOutput() FailoverGroupShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts"></a>

```go
func Timeouts() FailoverGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a>

---

##### `AllowedAccountsInput`<sup>Optional</sup> <a name="AllowedAccountsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```go
func AllowedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDatabasesInput`<sup>Optional</sup> <a name="AllowedDatabasesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```go
func AllowedDatabasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedExternalVolumesInput`<sup>Optional</sup> <a name="AllowedExternalVolumesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput"></a>

```go
func AllowedExternalVolumesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIntegrationTypesInput`<sup>Optional</sup> <a name="AllowedIntegrationTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```go
func AllowedIntegrationTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedSharesInput`<sup>Optional</sup> <a name="AllowedSharesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```go
func AllowedSharesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ErrorIntegrationInput`<sup>Optional</sup> <a name="ErrorIntegrationInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput"></a>

```go
func ErrorIntegrationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreEditionCheckInput`<sup>Optional</sup> <a name="IgnoreEditionCheckInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```go
func IgnoreEditionCheckInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectTypesInput`<sup>Optional</sup> <a name="ObjectTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```go
func ObjectTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OptimizedRefreshInput`<sup>Optional</sup> <a name="OptimizedRefreshInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput"></a>

```go
func OptimizedRefreshInput() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```go
func ReplicationScheduleInput() *string
```

- *Type:* *string

---

##### `RpoAssuranceInput`<sup>Optional</sup> <a name="RpoAssuranceInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput"></a>

```go
func RpoAssuranceInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```go
func AllowedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedDatabases`<sup>Required</sup> <a name="AllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```go
func AllowedDatabases() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedExternalVolumes`<sup>Required</sup> <a name="AllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes"></a>

```go
func AllowedExternalVolumes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```go
func AllowedIntegrationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedShares`<sup>Required</sup> <a name="AllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```go
func AllowedShares() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration"></a>

```go
func ErrorIntegration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreEditionCheck`<sup>Required</sup> <a name="IgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```go
func IgnoreEditionCheck() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```go
func ObjectTypes() *[]*string
```

- *Type:* *[]*string

---

##### `OptimizedRefresh`<sup>Required</sup> <a name="OptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh"></a>

```go
func OptimizedRefresh() interface{}
```

- *Type:* interface{}

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```go
func ReplicationSchedule() *string
```

- *Type:* *string

---

##### `RpoAssurance`<sup>Required</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance"></a>

```go
func RpoAssurance() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

&failovergroup.FailoverGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedAccounts: *[]*string,
	Name: *string,
	ObjectTypes: *[]*string,
	AllowedDatabases: *[]*string,
	AllowedExternalVolumes: *[]*string,
	AllowedIntegrationTypes: *[]*string,
	AllowedShares: *[]*string,
	Comment: *string,
	ErrorIntegration: *string,
	Id: *string,
	IgnoreEditionCheck: interface{},
	OptimizedRefresh: interface{},
	ReadOnly: interface{},
	ReplicationSchedule: *string,
	RpoAssurance: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19.failoverGroup.FailoverGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">AllowedAccounts</a></code> | <code>*[]*string</code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">ObjectTypes</a></code> | <code>*[]*string</code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">AllowedDatabases</a></code> | <code>*[]*string</code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes">AllowedExternalVolumes</a></code> | <code>*[]*string</code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>*[]*string</code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">AllowedShares</a></code> | <code>*[]*string</code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment">Comment</a></code> | <code>*string</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration">ErrorIntegration</a></code> | <code>*string</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>interface{}</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh">OptimizedRefresh</a></code> | <code>interface{}</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance">RpoAssurance</a></code> | <code>interface{}</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```go
AllowedAccounts *[]*string
```

- *Type:* *[]*string

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```go
ObjectTypes *[]*string
```

- *Type:* *[]*string

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `AllowedDatabases`<sup>Optional</sup> <a name="AllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```go
AllowedDatabases *[]*string
```

- *Type:* *[]*string

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `AllowedExternalVolumes`<sup>Optional</sup> <a name="AllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes"></a>

```go
AllowedExternalVolumes *[]*string
```

- *Type:* *[]*string

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `AllowedIntegrationTypes`<sup>Optional</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```go
AllowedIntegrationTypes *[]*string
```

- *Type:* *[]*string

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `AllowedShares`<sup>Optional</sup> <a name="AllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```go
AllowedShares *[]*string
```

- *Type:* *[]*string

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `ErrorIntegration`<sup>Optional</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration"></a>

```go
ErrorIntegration *string
```

- *Type:* *string

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreEditionCheck`<sup>Optional</sup> <a name="IgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```go
IgnoreEditionCheck interface{}
```

- *Type:* interface{}

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `OptimizedRefresh`<sup>Optional</sup> <a name="OptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh"></a>

```go
OptimizedRefresh interface{}
```

- *Type:* interface{}

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `ReplicationSchedule`<sup>Optional</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```go
ReplicationSchedule *string
```

- *Type:* *string

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `RpoAssurance`<sup>Optional</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance"></a>

```go
RpoAssurance interface{}
```

- *Type:* interface{}

Specifies whether the failover group uses RPO Assurance.

Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts"></a>

```go
Timeouts FailoverGroupTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

### FailoverGroupShowOutput <a name="FailoverGroupShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

&failovergroup.FailoverGroupShowOutput {

}
```


### FailoverGroupTimeouts <a name="FailoverGroupTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

&failovergroup.FailoverGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupShowOutputList <a name="FailoverGroupShowOutputList" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.NewFailoverGroupShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FailoverGroupShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get"></a>

```go
func Get(index *f64) FailoverGroupShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FailoverGroupShowOutputOutputReference <a name="FailoverGroupShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.NewFailoverGroupShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FailoverGroupShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator">AccountLocator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts">AllowedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration">ErrorIntegration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup">IsListingAutoFulfillmentGroup</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled">IsOptimizedRefreshEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary">IsPrimary</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly">IsPrimaryReadOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh">NextScheduledRefresh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes">ObjectTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary">Primary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup">RegionGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance">RpoAssurance</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState">SecondaryState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion">SnowflakeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountLocator`<sup>Required</sup> <a name="AccountLocator" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator"></a>

```go
func AccountLocator() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts"></a>

```go
func AllowedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```go
func AllowedIntegrationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration"></a>

```go
func ErrorIntegration() *string
```

- *Type:* *string

---

##### `IsListingAutoFulfillmentGroup`<sup>Required</sup> <a name="IsListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```go
func IsListingAutoFulfillmentGroup() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsOptimizedRefreshEnabled`<sup>Required</sup> <a name="IsOptimizedRefreshEnabled" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```go
func IsOptimizedRefreshEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsPrimaryReadOnly`<sup>Required</sup> <a name="IsPrimaryReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```go
func IsPrimaryReadOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NextScheduledRefresh`<sup>Required</sup> <a name="NextScheduledRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh"></a>

```go
func NextScheduledRefresh() *string
```

- *Type:* *string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes"></a>

```go
func ObjectTypes() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary"></a>

```go
func Primary() *string
```

- *Type:* *string

---

##### `RegionGroup`<sup>Required</sup> <a name="RegionGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup"></a>

```go
func RegionGroup() *string
```

- *Type:* *string

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule"></a>

```go
func ReplicationSchedule() *string
```

- *Type:* *string

---

##### `RpoAssurance`<sup>Required</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance"></a>

```go
func RpoAssurance() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SecondaryState`<sup>Required</sup> <a name="SecondaryState" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState"></a>

```go
func SecondaryState() *string
```

- *Type:* *string

---

##### `SnowflakeRegion`<sup>Required</sup> <a name="SnowflakeRegion" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion"></a>

```go
func SnowflakeRegion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() FailoverGroupShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a>

---


### FailoverGroupTimeoutsOutputReference <a name="FailoverGroupTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/failovergroup"

failovergroup.NewFailoverGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FailoverGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



