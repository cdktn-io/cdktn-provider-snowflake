# `apiIntegrationExternalMcpOauth2` Submodule <a name="`apiIntegrationExternalMcpOauth2` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpOauth2 <a name="ApiIntegrationExternalMcpOauth2" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2 snowflake_api_integration_external_mcp_oauth2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.NewApiIntegrationExternalMcpOauth2(scope Construct, id *string, config ApiIntegrationExternalMcpOauth2Config) ApiIntegrationExternalMcpOauth2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config">ApiIntegrationExternalMcpOauth2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config">ApiIntegrationExternalMcpOauth2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod">ResetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts"></a>

```go
func PutTimeouts(value ApiIntegrationExternalMcpOauth2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes"></a>

```go
func ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId"></a>

```go
func ResetId()
```

##### `ResetOauthClientAuthMethod` <a name="ResetOauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod"></a>

```go
func ResetOauthClientAuthMethod()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity"></a>

```go
func ResetOauthRefreshTokenValidity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiIntegrationExternalMcpOauth2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiIntegrationExternalMcpOauth2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpOauth2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput">OauthAuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput">OauthClientAuthMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput">OauthTokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput"></a>

```go
func DescribeOutput() ApiIntegrationExternalMcpOauth2DescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput"></a>

```go
func ShowOutput() ApiIntegrationExternalMcpOauth2ShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts"></a>

```go
func Timeouts() ApiIntegrationExternalMcpOauth2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput"></a>

```go
func ApiAllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput"></a>

```go
func ApiBlockedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="OauthAuthorizationEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput"></a>

```go
func OauthAuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `OauthClientAuthMethodInput`<sup>Optional</sup> <a name="OauthClientAuthMethodInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput"></a>

```go
func OauthClientAuthMethodInput() *string
```

- *Type:* *string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput"></a>

```go
func OauthClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput"></a>

```go
func OauthRefreshTokenValidityInput() *f64
```

- *Type:* *f64

---

##### `OauthTokenEndpointInput`<sup>Optional</sup> <a name="OauthTokenEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput"></a>

```go
func OauthTokenEndpointInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes"></a>

```go
func ApiAllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes"></a>

```go
func ApiBlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint"></a>

```go
func OauthAuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod"></a>

```go
func OauthClientAuthMethod() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret"></a>

```go
func OauthClientSecret() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity"></a>

```go
func OauthRefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint"></a>

```go
func OauthTokenEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpOauth2Config <a name="ApiIntegrationExternalMcpOauth2Config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

&apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2Config {
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
	OauthAuthorizationEndpoint: *string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	OauthTokenEndpoint: *string,
	ApiBlockedPrefixes: *[]*string,
	Comment: *string,
	Id: *string,
	OauthClientAuthMethod: *string,
	OauthRefreshTokenValidity: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>*string</code> | Specifies the OAuth 2.0 authorization endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Specifies the OAuth 2.0 client ID for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>*string</code> | Specifies the OAuth 2.0 token endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>*string</code> | Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` \| `CLIENT_SECRET_POST`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | Specifies the validity period (in seconds) for refresh tokens issued by the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes"></a>

```go
ApiAllowedPrefixes *[]*string
```

- *Type:* *[]*string

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint"></a>

```go
OauthAuthorizationEndpoint *string
```

- *Type:* *string

Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Specifies the OAuth 2.0 client ID for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint"></a>

```go
OauthTokenEndpoint *string
```

- *Type:* *string

Specifies the OAuth 2.0 token endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes"></a>

```go
ApiBlockedPrefixes *[]*string
```

- *Type:* *[]*string

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthClientAuthMethod`<sup>Optional</sup> <a name="OauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod"></a>

```go
OauthClientAuthMethod *string
```

- *Type:* *string

Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity"></a>

```go
OauthRefreshTokenValidity *f64
```

- *Type:* *f64

Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts"></a>

```go
Timeouts ApiIntegrationExternalMcpOauth2Timeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}

---

### ApiIntegrationExternalMcpOauth2DescribeOutput <a name="ApiIntegrationExternalMcpOauth2DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

&apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2DescribeOutput {

}
```


### ApiIntegrationExternalMcpOauth2ShowOutput <a name="ApiIntegrationExternalMcpOauth2ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

&apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2ShowOutput {

}
```


### ApiIntegrationExternalMcpOauth2Timeouts <a name="ApiIntegrationExternalMcpOauth2Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

&apiintegrationexternalmcpoauth2.ApiIntegrationExternalMcpOauth2Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpOauth2DescribeOutputList <a name="ApiIntegrationExternalMcpOauth2DescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.NewApiIntegrationExternalMcpOauth2DescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationExternalMcpOauth2DescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.NewApiIntegrationExternalMcpOauth2DescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer">OauthAssertionIssuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant">OauthGrant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername">OauthUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType">UserAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes"></a>

```go
func BlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```go
func OauthAccessTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```go
func OauthAllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `OauthAssertionIssuer`<sup>Required</sup> <a name="OauthAssertionIssuer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```go
func OauthAssertionIssuer() *string
```

- *Type:* *string

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```go
func OauthAuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```go
func OauthClientAuthMethod() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthGrant`<sup>Required</sup> <a name="OauthGrant" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant"></a>

```go
func OauthGrant() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```go
func OauthRefreshTokenValidity() *f64
```

- *Type:* *f64

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```go
func OauthTokenEndpoint() *string
```

- *Type:* *string

---

##### `OauthUsername`<sup>Required</sup> <a name="OauthUsername" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername"></a>

```go
func OauthUsername() *string
```

- *Type:* *string

---

##### `UserAuthType`<sup>Required</sup> <a name="UserAuthType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType"></a>

```go
func UserAuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationExternalMcpOauth2DescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a>

---


### ApiIntegrationExternalMcpOauth2ShowOutputList <a name="ApiIntegrationExternalMcpOauth2ShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.NewApiIntegrationExternalMcpOauth2ShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationExternalMcpOauth2ShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationExternalMcpOauth2ShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationExternalMcpOauth2ShowOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2ShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.NewApiIntegrationExternalMcpOauth2ShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationExternalMcpOauth2ShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationExternalMcpOauth2ShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a>

---


### ApiIntegrationExternalMcpOauth2TimeoutsOutputReference <a name="ApiIntegrationExternalMcpOauth2TimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v17/apiintegrationexternalmcpoauth2"

apiintegrationexternalmcpoauth2.NewApiIntegrationExternalMcpOauth2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiIntegrationExternalMcpOauth2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



