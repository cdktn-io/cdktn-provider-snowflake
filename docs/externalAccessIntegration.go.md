# `externalAccessIntegration` Submodule <a name="`externalAccessIntegration` Submodule" id="@cdktn/provider-snowflake.externalAccessIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalAccessIntegration <a name="ExternalAccessIntegration" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegration(scope Construct, id *string, config ExternalAccessIntegrationConfig) ExternalAccessIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig">ExternalAccessIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig">ExternalAccessIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations">PutAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets">PutAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations">ResetAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets">ResetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedApiAuthenticationIntegrations` <a name="PutAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations"></a>

```go
func PutAllowedApiAuthenticationIntegrations(value ExternalAccessIntegrationAllowedApiAuthenticationIntegrations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `PutAllowedAuthenticationSecrets` <a name="PutAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets"></a>

```go
func PutAllowedAuthenticationSecrets(value ExternalAccessIntegrationAllowedAuthenticationSecrets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts"></a>

```go
func PutTimeouts(value ExternalAccessIntegrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `ResetAllowedApiAuthenticationIntegrations` <a name="ResetAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations"></a>

```go
func ResetAllowedApiAuthenticationIntegrations()
```

##### `ResetAllowedAuthenticationSecrets` <a name="ResetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets"></a>

```go
func ResetAllowedAuthenticationSecrets()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.ExternalAccessIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.ExternalAccessIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.ExternalAccessIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.ExternalAccessIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExternalAccessIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExternalAccessIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ExternalAccessIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput">AllowedApiAuthenticationIntegrationsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput">AllowedAuthenticationSecretsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput">AllowedNetworkRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations"></a>

```go
func AllowedApiAuthenticationIntegrations() ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a>

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput"></a>

```go
func DescribeOutput() ExternalAccessIntegrationDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput"></a>

```go
func ShowOutput() ExternalAccessIntegrationShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts"></a>

```go
func Timeouts() ExternalAccessIntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a>

---

##### `AllowedApiAuthenticationIntegrationsInput`<sup>Optional</sup> <a name="AllowedApiAuthenticationIntegrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput"></a>

```go
func AllowedApiAuthenticationIntegrationsInput() ExternalAccessIntegrationAllowedApiAuthenticationIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `AllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput"></a>

```go
func AllowedAuthenticationSecretsInput() ExternalAccessIntegrationAllowedAuthenticationSecrets
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `AllowedNetworkRulesInput`<sup>Optional</sup> <a name="AllowedNetworkRulesInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput"></a>

```go
func AllowedNetworkRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules"></a>

```go
func AllowedNetworkRules() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrations <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

&externalaccessintegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations {
	Integrations: *[]*string,
	None: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations">Integrations</a></code> | <code>*[]*string</code> | Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none">None</a></code> | <code>interface{}</code> | When true, no API authentication integrations are allowed. Conflicts with `integrations`. |

---

##### `Integrations`<sup>Optional</sup> <a name="Integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations"></a>

```go
Integrations *[]*string
```

- *Type:* *[]*string

Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none"></a>

```go
None interface{}
```

- *Type:* interface{}

When true, no API authentication integrations are allowed. Conflicts with `integrations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

### ExternalAccessIntegrationAllowedAuthenticationSecrets <a name="ExternalAccessIntegrationAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

&externalaccessintegration.ExternalAccessIntegrationAllowedAuthenticationSecrets {
	All: interface{},
	None: interface{},
	Secrets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all">All</a></code> | <code>interface{}</code> | When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none">None</a></code> | <code>interface{}</code> | When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets">Secrets</a></code> | <code>*[]*string</code> | Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none"></a>

```go
None interface{}
```

- *Type:* interface{}

When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets"></a>

```go
Secrets *[]*string
```

- *Type:* *[]*string

Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}

---

### ExternalAccessIntegrationConfig <a name="ExternalAccessIntegrationConfig" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

&externalaccessintegration.ExternalAccessIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedNetworkRules: *[]*string,
	Enabled: interface{},
	Name: *string,
	AllowedApiAuthenticationIntegrations: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations,
	AllowedAuthenticationSecrets: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets,
	Comment: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.externalAccessIntegration.ExternalAccessIntegrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>*[]*string</code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules"></a>

```go
AllowedNetworkRules *[]*string
```

- *Type:* *[]*string

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `AllowedApiAuthenticationIntegrations`<sup>Optional</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations"></a>

```go
AllowedApiAuthenticationIntegrations ExternalAccessIntegrationAllowedApiAuthenticationIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `AllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets"></a>

```go
AllowedAuthenticationSecrets ExternalAccessIntegrationAllowedAuthenticationSecrets
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts"></a>

```go
Timeouts ExternalAccessIntegrationTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

### ExternalAccessIntegrationDescribeOutput <a name="ExternalAccessIntegrationDescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

&externalaccessintegration.ExternalAccessIntegrationDescribeOutput {

}
```


### ExternalAccessIntegrationShowOutput <a name="ExternalAccessIntegrationShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

&externalaccessintegration.ExternalAccessIntegrationShowOutput {

}
```


### ExternalAccessIntegrationTimeouts <a name="ExternalAccessIntegrationTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

&externalaccessintegration.ExternalAccessIntegrationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations">ResetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone">ResetNone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrations` <a name="ResetIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations"></a>

```go
func ResetIntegrations()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone"></a>

```go
func ResetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput">IntegrationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput">NoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations">Integrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none">None</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntegrationsInput`<sup>Optional</sup> <a name="IntegrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput"></a>

```go
func IntegrationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput"></a>

```go
func NoneInput() interface{}
```

- *Type:* interface{}

---

##### `Integrations`<sup>Required</sup> <a name="Integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations"></a>

```go
func Integrations() *[]*string
```

- *Type:* *[]*string

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none"></a>

```go
func None() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalAccessIntegrationAllowedApiAuthenticationIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---


### ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference <a name="ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone">ResetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone"></a>

```go
func ResetNone()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets"></a>

```go
func ResetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput">NoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput">SecretsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none">None</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets">Secrets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput"></a>

```go
func NoneInput() interface{}
```

- *Type:* interface{}

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput"></a>

```go
func SecretsInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none"></a>

```go
func None() interface{}
```

- *Type:* interface{}

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets"></a>

```go
func Secrets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalAccessIntegrationAllowedAuthenticationSecrets
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---


### ExternalAccessIntegrationDescribeOutputList <a name="ExternalAccessIntegrationDescribeOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalAccessIntegrationDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get"></a>

```go
func Get(index *f64) ExternalAccessIntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ExternalAccessIntegrationDescribeOutputOutputReference <a name="ExternalAccessIntegrationDescribeOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalAccessIntegrationDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```go
func AllowedApiAuthenticationIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```go
func AllowedNetworkRules() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalAccessIntegrationDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a>

---


### ExternalAccessIntegrationShowOutputList <a name="ExternalAccessIntegrationShowOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ExternalAccessIntegrationShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get"></a>

```go
func Get(index *f64) ExternalAccessIntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ExternalAccessIntegrationShowOutputOutputReference <a name="ExternalAccessIntegrationShowOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ExternalAccessIntegrationShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ExternalAccessIntegrationShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a>

---


### ExternalAccessIntegrationTimeoutsOutputReference <a name="ExternalAccessIntegrationTimeoutsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/externalaccessintegration"

externalaccessintegration.NewExternalAccessIntegrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExternalAccessIntegrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



