# `apiIntegrationGoogleCloudApiGateway` Submodule <a name="`apiIntegrationGoogleCloudApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGoogleCloudApiGateway <a name="ApiIntegrationGoogleCloudApiGateway" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway snowflake_api_integration_google_cloud_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_allowed_prefixes: typing.List[str],
  enabled: bool | IResolvable,
  google_audience: str,
  name: str,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationGoogleCloudApiGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.googleAudience">google_audience</a></code> | <code>str</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `google_audience`<sup>Required</sup> <a name="google_audience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.googleAudience"></a>

- *Type:* str

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}.

---

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationGoogleCloudApiGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationGoogleCloudApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGoogleCloudApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput">google_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience">google_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput"></a>

```python
describe_output: ApiIntegrationGoogleCloudApiGatewayDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput"></a>

```python
show_output: ApiIntegrationGoogleCloudApiGatewayShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts"></a>

```python
timeouts: ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a>

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `google_audience_input`<sup>Optional</sup> <a name="google_audience_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput"></a>

```python
google_audience_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationGoogleCloudApiGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `google_audience`<sup>Required</sup> <a name="google_audience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience"></a>

```python
google_audience: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGoogleCloudApiGatewayConfig <a name="ApiIntegrationGoogleCloudApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_allowed_prefixes: typing.List[str],
  enabled: bool | IResolvable,
  google_audience: str,
  name: str,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationGoogleCloudApiGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience">google_audience</a></code> | <code>str</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `google_audience`<sup>Required</sup> <a name="google_audience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience"></a>

```python
google_audience: str
```

- *Type:* str

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationGoogleCloudApiGatewayTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

### ApiIntegrationGoogleCloudApiGatewayDescribeOutput <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput()
```


### ApiIntegrationGoogleCloudApiGatewayShowOutput <a name="ApiIntegrationGoogleCloudApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput()
```


### ApiIntegrationGoogleCloudApiGatewayTimeouts <a name="ApiIntegrationGoogleCloudApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGoogleCloudApiGatewayDescribeOutputList <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount">google_api_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience">google_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `google_api_service_account`<sup>Required</sup> <a name="google_api_service_account" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```python
google_api_service_account: str
```

- *Type:* str

---

##### `google_audience`<sup>Required</sup> <a name="google_audience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience"></a>

```python
google_audience: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGoogleCloudApiGatewayDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputList <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGoogleCloudApiGatewayShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_google_cloud_api_gateway

apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationGoogleCloudApiGatewayTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---



