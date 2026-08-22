# `apiIntegrationGitRepositoryPrivateLink` Submodule <a name="`apiIntegrationGitRepositoryPrivateLink` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryPrivateLink <a name="ApiIntegrationGitRepositoryPrivateLink" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link snowflake_api_integration_git_repository_private_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.NewApiIntegrationGitRepositoryPrivateLink(scope Construct, id *string, config ApiIntegrationGitRepositoryPrivateLinkConfig) ApiIntegrationGitRepositoryPrivateLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig">ApiIntegrationGitRepositoryPrivateLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig">ApiIntegrationGitRepositoryPrivateLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets">ResetAllAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets">ResetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets">ResetNoAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates">ResetTlsTrustedCertificates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts"></a>

```go
func PutTimeouts(value ApiIntegrationGitRepositoryPrivateLinkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---

##### `ResetAllAllowedAuthenticationSecrets` <a name="ResetAllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets"></a>

```go
func ResetAllAllowedAuthenticationSecrets()
```

##### `ResetAllowedAuthenticationSecrets` <a name="ResetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets"></a>

```go
func ResetAllowedAuthenticationSecrets()
```

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes"></a>

```go
func ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId"></a>

```go
func ResetId()
```

##### `ResetNoAllowedAuthenticationSecrets` <a name="ResetNoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets"></a>

```go
func ResetNoAllowedAuthenticationSecrets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTlsTrustedCertificates` <a name="ResetTlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates"></a>

```go
func ResetTlsTrustedCertificates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiIntegrationGitRepositoryPrivateLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiIntegrationGitRepositoryPrivateLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryPrivateLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput">AllAllowedAuthenticationSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput">AllowedAuthenticationSecretsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput">NoAllowedAuthenticationSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput">TlsTrustedCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput">UsePrivatelinkEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets">AllAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets">NoAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput"></a>

```go
func DescribeOutput() ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput"></a>

```go
func ShowOutput() ApiIntegrationGitRepositoryPrivateLinkShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts"></a>

```go
func Timeouts() ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a>

---

##### `AllAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput"></a>

```go
func AllAllowedAuthenticationSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput"></a>

```go
func AllowedAuthenticationSecretsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput"></a>

```go
func ApiAllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput"></a>

```go
func ApiBlockedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NoAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="NoAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput"></a>

```go
func NoAllowedAuthenticationSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TlsTrustedCertificatesInput`<sup>Optional</sup> <a name="TlsTrustedCertificatesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput"></a>

```go
func TlsTrustedCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsePrivatelinkEndpointInput`<sup>Optional</sup> <a name="UsePrivatelinkEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput"></a>

```go
func UsePrivatelinkEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AllAllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets"></a>

```go
func AllAllowedAuthenticationSecrets() interface{}
```

- *Type:* interface{}

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *[]*string
```

- *Type:* *[]*string

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes"></a>

```go
func ApiAllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes"></a>

```go
func ApiBlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NoAllowedAuthenticationSecrets`<sup>Required</sup> <a name="NoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets"></a>

```go
func NoAllowedAuthenticationSecrets() interface{}
```

- *Type:* interface{}

---

##### `TlsTrustedCertificates`<sup>Required</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates"></a>

```go
func TlsTrustedCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint"></a>

```go
func UsePrivatelinkEndpoint() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryPrivateLinkConfig <a name="ApiIntegrationGitRepositoryPrivateLinkConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

&apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLinkConfig {
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
	UsePrivatelinkEndpoint: interface{},
	AllAllowedAuthenticationSecrets: interface{},
	AllowedAuthenticationSecrets: *[]*string,
	ApiBlockedPrefixes: *[]*string,
	Comment: *string,
	Id: *string,
	NoAllowedAuthenticationSecrets: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts,
	TlsTrustedCertificates: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>interface{}</code> | Specifies whether to use the private link endpoint for the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets">AllAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*[]*string</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets">NoAllowedAuthenticationSecrets</a></code> | <code>interface{}</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>*[]*string</code> | Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes"></a>

```go
ApiAllowedPrefixes *[]*string
```

- *Type:* *[]*string

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#api_allowed_prefixes ApiIntegrationGitRepositoryPrivateLink#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#enabled ApiIntegrationGitRepositoryPrivateLink#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#name ApiIntegrationGitRepositoryPrivateLink#name}

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint"></a>

```go
UsePrivatelinkEndpoint interface{}
```

- *Type:* interface{}

Specifies whether to use the private link endpoint for the git repository.

When set to true, Snowflake uses the VNet-injected endpoint for the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#use_privatelink_endpoint ApiIntegrationGitRepositoryPrivateLink#use_privatelink_endpoint}

---

##### `AllAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets"></a>

```go
AllAllowedAuthenticationSecrets interface{}
```

- *Type:* interface{}

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#all_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#all_allowed_authentication_secrets}

---

##### `AllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets"></a>

```go
AllowedAuthenticationSecrets *[]*string
```

- *Type:* *[]*string

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#allowed_authentication_secrets}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes"></a>

```go
ApiBlockedPrefixes *[]*string
```

- *Type:* *[]*string

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#api_blocked_prefixes ApiIntegrationGitRepositoryPrivateLink#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#comment ApiIntegrationGitRepositoryPrivateLink#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NoAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="NoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets"></a>

```go
NoAllowedAuthenticationSecrets interface{}
```

- *Type:* interface{}

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#no_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#no_allowed_authentication_secrets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts"></a>

```go
Timeouts ApiIntegrationGitRepositoryPrivateLinkTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#timeouts ApiIntegrationGitRepositoryPrivateLink#timeouts}

---

##### `TlsTrustedCertificates`<sup>Optional</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates"></a>

```go
TlsTrustedCertificates *[]*string
```

- *Type:* *[]*string

Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link.

Only needed when the certificate is self-signed rather than signed by a certificate authority. Each entry must be a fully-qualified name of a Snowflake secret of type generic string whose value is Base64-encoded certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#tls_trusted_certificates ApiIntegrationGitRepositoryPrivateLink#tls_trusted_certificates}

---

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutput <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

&apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput {

}
```


### ApiIntegrationGitRepositoryPrivateLinkShowOutput <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

&apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLinkShowOutput {

}
```


### ApiIntegrationGitRepositoryPrivateLinkTimeouts <a name="ApiIntegrationGitRepositoryPrivateLinkTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

&apiintegrationgitrepositoryprivatelink.ApiIntegrationGitRepositoryPrivateLinkTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.NewApiIntegrationGitRepositoryPrivateLinkDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.NewApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes"></a>

```go
func BlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TlsTrustedCertificates`<sup>Required</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```go
func TlsTrustedCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```go
func UsePrivatelinkEndpoint() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationGitRepositoryPrivateLinkDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.NewApiIntegrationGitRepositoryPrivateLinkShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationGitRepositoryPrivateLinkShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.NewApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationGitRepositoryPrivateLinkShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationgitrepositoryprivatelink"

apiintegrationgitrepositoryprivatelink.NewApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



