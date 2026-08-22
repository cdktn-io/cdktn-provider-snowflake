# `apiIntegrationExternalMcpDynamicClient` Submodule <a name="`apiIntegrationExternalMcpDynamicClient` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpDynamicClient <a name="ApiIntegrationExternalMcpDynamicClient" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client snowflake_api_integration_external_mcp_dynamic_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.NewApiIntegrationExternalMcpDynamicClient(scope Construct, id *string, config ApiIntegrationExternalMcpDynamicClientConfig) ApiIntegrationExternalMcpDynamicClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig">ApiIntegrationExternalMcpDynamicClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig">ApiIntegrationExternalMcpDynamicClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts"></a>

```go
func PutTimeouts(value ApiIntegrationExternalMcpDynamicClientTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes"></a>

```go
func ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment"></a>

```go
func ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiIntegrationExternalMcpDynamicClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiIntegrationExternalMcpDynamicClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpDynamicClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput">OauthResourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl">OauthResourceUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput"></a>

```go
func DescribeOutput() ApiIntegrationExternalMcpDynamicClientDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput"></a>

```go
func ShowOutput() ApiIntegrationExternalMcpDynamicClientShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts"></a>

```go
func Timeouts() ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput"></a>

```go
func ApiAllowedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput"></a>

```go
func ApiBlockedPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OauthResourceUrlInput`<sup>Optional</sup> <a name="OauthResourceUrlInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput"></a>

```go
func OauthResourceUrlInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes"></a>

```go
func ApiAllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes"></a>

```go
func ApiBlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OauthResourceUrl`<sup>Required</sup> <a name="OauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl"></a>

```go
func OauthResourceUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpDynamicClientConfig <a name="ApiIntegrationExternalMcpDynamicClientConfig" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

&apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClientConfig {
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
	OauthResourceUrl: *string,
	ApiBlockedPrefixes: *[]*string,
	Comment: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>*[]*string</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name">Name</a></code> | <code>*string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl">OauthResourceUrl</a></code> | <code>*string</code> | The URL of the OAuth2 protected resource server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>*[]*string</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes"></a>

```go
ApiAllowedPrefixes *[]*string
```

- *Type:* *[]*string

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#api_allowed_prefixes ApiIntegrationExternalMcpDynamicClient#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#enabled ApiIntegrationExternalMcpDynamicClient#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#name ApiIntegrationExternalMcpDynamicClient#name}

---

##### `OauthResourceUrl`<sup>Required</sup> <a name="OauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl"></a>

```go
OauthResourceUrl *string
```

- *Type:* *string

The URL of the OAuth2 protected resource server.

This URL is used by Snowflake to discover OAuth2 provider endpoints via RFC 8414 server metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#oauth_resource_url ApiIntegrationExternalMcpDynamicClient#oauth_resource_url}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes"></a>

```go
ApiBlockedPrefixes *[]*string
```

- *Type:* *[]*string

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#api_blocked_prefixes ApiIntegrationExternalMcpDynamicClient#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#comment ApiIntegrationExternalMcpDynamicClient#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts"></a>

```go
Timeouts ApiIntegrationExternalMcpDynamicClientTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#timeouts ApiIntegrationExternalMcpDynamicClient#timeouts}

---

### ApiIntegrationExternalMcpDynamicClientDescribeOutput <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

&apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClientDescribeOutput {

}
```


### ApiIntegrationExternalMcpDynamicClientShowOutput <a name="ApiIntegrationExternalMcpDynamicClientShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

&apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClientShowOutput {

}
```


### ApiIntegrationExternalMcpDynamicClientTimeouts <a name="ApiIntegrationExternalMcpDynamicClientTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

&apiintegrationexternalmcpdynamicclient.ApiIntegrationExternalMcpDynamicClientTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpDynamicClientDescribeOutputList <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.NewApiIntegrationExternalMcpDynamicClientDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationExternalMcpDynamicClientDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.NewApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl">OauthResourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType">UserAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes"></a>

```go
func AllowedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider"></a>

```go
func ApiProvider() *string
```

- *Type:* *string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes"></a>

```go
func BlockedPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `OauthResourceUrl`<sup>Required</sup> <a name="OauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```go
func OauthResourceUrl() *string
```

- *Type:* *string

---

##### `UserAuthType`<sup>Required</sup> <a name="UserAuthType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType"></a>

```go
func UserAuthType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationExternalMcpDynamicClientDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientShowOutputList <a name="ApiIntegrationExternalMcpDynamicClientShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.NewApiIntegrationExternalMcpDynamicClientShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApiIntegrationExternalMcpDynamicClientShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get"></a>

```go
func Get(index *f64) ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.NewApiIntegrationExternalMcpDynamicClientShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType"></a>

```go
func ApiType() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiIntegrationExternalMcpDynamicClientShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference <a name="ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/apiintegrationexternalmcpdynamicclient"

apiintegrationexternalmcpdynamicclient.NewApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



