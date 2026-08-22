# `apiIntegrationGitRepositoryToken` Submodule <a name="`apiIntegrationGitRepositoryToken` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryToken <a name="ApiIntegrationGitRepositoryToken" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token snowflake_api_integration_git_repository_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.NewApiIntegrationGitRepositoryToken(scope Construct, id *string, config ApiIntegrationGitRepositoryTokenConfig) ApiIntegrationGitRepositoryToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig">ApiIntegrationGitRepositoryTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig">ApiIntegrationGitRepositoryTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllAllowedAuthenticationSecrets">ResetAllAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllowedAuthenticationSecrets">ResetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetNoAllowedAuthenticationSecrets">ResetNoAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts"></a>

```go
func PutTimeouts(value ApiIntegrationGitRepositoryTokenTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a>

---

##### `ResetAllAllowedAuthenticationSecrets` <a name="ResetAllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllAllowedAuthenticationSecrets"></a>

```go
func ResetAllAllowedAuthenticationSecrets()
```

##### `ResetAllowedAuthenticationSecrets` <a name="ResetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllowedAuthenticationSecrets"></a>

```go
func ResetAllowedAuthenticationSecrets()
```

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetApiBlockedPrefixes"></a>

```go
func ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetId"></a>

```go
func ResetId()
```

##### `ResetNoAllowedAuthenticationSecrets` <a name="ResetNoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetNoAllowedAuthenticationSecrets"></a>

```go
func ResetNoAllowedAuthenticationSecrets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryToken resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryToken_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiIntegrationGitRepositoryToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiIntegrationGitRepositoryToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList">ApiIntegrationGitRepositoryTokenDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList">ApiIntegrationGitRepositoryTokenShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference">ApiIntegrationGitRepositoryTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecretsInput">AllAllowedAuthenticationSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecretsInput">AllowedAuthenticationSecretsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecretsInput">NoAllowedAuthenticationSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecrets">AllAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecrets">NoAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.describeOutput"></a>

```go
func DescribeOutput() ApiIntegrationGitRepositoryTokenDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList">ApiIntegrationGitRepositoryTokenDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.showOutput"></a>

```go
func ShowOutput() ApiIntegrationGitRepositoryTokenShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList">ApiIntegrationGitRepositoryTokenShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeouts"></a>

```go
func Timeouts() ApiIntegrationGitRepositoryTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference">ApiIntegrationGitRepositoryTokenTimeoutsOutputReference</a>

---

##### `AllAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecretsInput"></a>

```go
func AllAllowedAuthenticationSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecretsInput"></a>

```go
func AllowedAuthenticationSecretsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixesInput"></a>

```go
func ApiAllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixesInput"></a>

```go
func ApiBlockedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NoAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="NoAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecretsInput"></a>

```go
func NoAllowedAuthenticationSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllAllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecrets"></a>

```go
func AllAllowedAuthenticationSecrets() interface{}
```

- *Type:* interface{}

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixes"></a>

```go
func ApiAllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixes"></a>

```go
func ApiBlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NoAllowedAuthenticationSecrets`<sup>Required</sup> <a name="NoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecrets"></a>

```go
func NoAllowedAuthenticationSecrets() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryTokenConfig <a name="ApiIntegrationGitRepositoryTokenConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

&apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiAllowedPrefixes: *[]*string,
	Enabled: interface{},
	Name: *string,
	AllAllowedAuthenticationSecrets: interface{},
	AllowedAuthenticationSecrets: *[]*string,
	ApiBlockedPrefixes: *[]*string,
	Comment: *string,
	Id: *string,
	NoAllowedAuthenticationSecrets: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allAllowedAuthenticationSecrets">AllAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*[]*string</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.noAllowedAuthenticationSecrets">NoAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiAllowedPrefixes"></a>

```go
ApiAllowedPrefixes *[]*string
```

- *Type:* *[]*string

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#api_allowed_prefixes ApiIntegrationGitRepositoryToken#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#enabled ApiIntegrationGitRepositoryToken#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#name ApiIntegrationGitRepositoryToken#name}

---

##### `AllAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allAllowedAuthenticationSecrets"></a>

```go
AllAllowedAuthenticationSecrets interface{}
```

- *Type:* interface{}

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#all_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#all_allowed_authentication_secrets}

---

##### `AllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allowedAuthenticationSecrets"></a>

```go
AllowedAuthenticationSecrets *[]*string
```

- *Type:* *[]*string

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#allowed_authentication_secrets ApiIntegrationGitRepositoryToken#allowed_authentication_secrets}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiBlockedPrefixes"></a>

```go
ApiBlockedPrefixes *[]*string
```

- *Type:* *[]*string

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#api_blocked_prefixes ApiIntegrationGitRepositoryToken#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#comment ApiIntegrationGitRepositoryToken#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NoAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="NoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.noAllowedAuthenticationSecrets"></a>

```go
NoAllowedAuthenticationSecrets interface{}
```

- *Type:* interface{}

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#no_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#no_allowed_authentication_secrets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.timeouts"></a>

```go
Timeouts ApiIntegrationGitRepositoryTokenTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#timeouts ApiIntegrationGitRepositoryToken#timeouts}

---

### ApiIntegrationGitRepositoryTokenDescribeOutput <a name="ApiIntegrationGitRepositoryTokenDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

&apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryTokenDescribeOutput {

}
```


### ApiIntegrationGitRepositoryTokenShowOutput <a name="ApiIntegrationGitRepositoryTokenShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

&apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryTokenShowOutput {

}
```


### ApiIntegrationGitRepositoryTokenTimeouts <a name="ApiIntegrationGitRepositoryTokenTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

&apiintegrationgitrepositorytoken.ApiIntegrationGitRepositoryTokenTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#create ApiIntegrationGitRepositoryToken#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#delete ApiIntegrationGitRepositoryToken#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#read ApiIntegrationGitRepositoryToken#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#update ApiIntegrationGitRepositoryToken#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#create ApiIntegrationGitRepositoryToken#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#delete ApiIntegrationGitRepositoryToken#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#read ApiIntegrationGitRepositoryToken#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_token#update ApiIntegrationGitRepositoryToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryTokenDescribeOutputList <a name="ApiIntegrationGitRepositoryTokenDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.NewApiIntegrationGitRepositoryTokenDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationGitRepositoryTokenDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.NewApiIntegrationGitRepositoryTokenDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput">ApiIntegrationGitRepositoryTokenDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.blockedPrefixes"></a>

```go
func BlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationGitRepositoryTokenDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput">ApiIntegrationGitRepositoryTokenDescribeOutput</a>

---


### ApiIntegrationGitRepositoryTokenShowOutputList <a name="ApiIntegrationGitRepositoryTokenShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.NewApiIntegrationGitRepositoryTokenShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationGitRepositoryTokenShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationGitRepositoryTokenShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationGitRepositoryTokenShowOutputOutputReference <a name="ApiIntegrationGitRepositoryTokenShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.NewApiIntegrationGitRepositoryTokenShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationGitRepositoryTokenShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput">ApiIntegrationGitRepositoryTokenShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationGitRepositoryTokenShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput">ApiIntegrationGitRepositoryTokenShowOutput</a>

---


### ApiIntegrationGitRepositoryTokenTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryTokenTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositorytoken"

apiintegrationgitrepositorytoken.NewApiIntegrationGitRepositoryTokenTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiIntegrationGitRepositoryTokenTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



