# `apiIntegrationAzureApiManagement` Submodule <a name="`apiIntegrationAzureApiManagement` Submodule" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationAzureApiManagement <a name="ApiIntegrationAzureApiManagement" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management snowflake_api_integration_azure_api_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement(
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
  azure_ad_application_id: str,
  azure_tenant_id: str,
  enabled: bool | IResolvable,
  name: str,
  api_blocked_prefixes: typing.List[str] = None,
  api_key: str = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationAzureApiManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | The 'Application (client) ID' of the Azure AD app for your Azure API Management instance. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.apiKey">api_key</a></code> | <code>str</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_allowed_prefixes ApiIntegrationAzureApiManagement#api_allowed_prefixes}

---

##### `azure_ad_application_id`<sup>Required</sup> <a name="azure_ad_application_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.azureAdApplicationId"></a>

- *Type:* str

The 'Application (client) ID' of the Azure AD app for your Azure API Management instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#azure_ad_application_id ApiIntegrationAzureApiManagement#azure_ad_application_id}

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.azureTenantId"></a>

- *Type:* str

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#azure_tenant_id ApiIntegrationAzureApiManagement#azure_tenant_id}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#enabled ApiIntegrationAzureApiManagement#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#name ApiIntegrationAzureApiManagement#name}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_blocked_prefixes ApiIntegrationAzureApiManagement#api_blocked_prefixes}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.apiKey"></a>

- *Type:* str

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

Snowflake returns a masked value for this field in DESCRIBE output, so external changes to it cannot be detected. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_key ApiIntegrationAzureApiManagement#api_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#comment ApiIntegrationAzureApiManagement#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#timeouts ApiIntegrationAzureApiManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}.

---

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationAzureApiManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationAzureApiManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationAzureApiManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationAzureApiManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList">ApiIntegrationAzureApiManagementDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList">ApiIntegrationAzureApiManagementShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference">ApiIntegrationAzureApiManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationIdInput">azure_ad_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.describeOutput"></a>

```python
describe_output: ApiIntegrationAzureApiManagementDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList">ApiIntegrationAzureApiManagementDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.showOutput"></a>

```python
show_output: ApiIntegrationAzureApiManagementShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList">ApiIntegrationAzureApiManagementShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeouts"></a>

```python
timeouts: ApiIntegrationAzureApiManagementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference">ApiIntegrationAzureApiManagementTimeoutsOutputReference</a>

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `azure_ad_application_id_input`<sup>Optional</sup> <a name="azure_ad_application_id_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationIdInput"></a>

```python
azure_ad_application_id_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationAzureApiManagementTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `azure_ad_application_id`<sup>Required</sup> <a name="azure_ad_application_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureAdApplicationId"></a>

```python
azure_ad_application_id: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationAzureApiManagementConfig <a name="ApiIntegrationAzureApiManagementConfig" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_allowed_prefixes: typing.List[str],
  azure_ad_application_id: str,
  azure_tenant_id: str,
  enabled: bool | IResolvable,
  name: str,
  api_blocked_prefixes: typing.List[str] = None,
  api_key: str = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationAzureApiManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | The 'Application (client) ID' of the Azure AD app for your Azure API Management instance. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiKey">api_key</a></code> | <code>str</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_allowed_prefixes ApiIntegrationAzureApiManagement#api_allowed_prefixes}

---

##### `azure_ad_application_id`<sup>Required</sup> <a name="azure_ad_application_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureAdApplicationId"></a>

```python
azure_ad_application_id: str
```

- *Type:* str

The 'Application (client) ID' of the Azure AD app for your Azure API Management instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#azure_ad_application_id ApiIntegrationAzureApiManagement#azure_ad_application_id}

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

Specifies the ID for your Office 365 tenant that all Azure API Management instances belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#azure_tenant_id ApiIntegrationAzureApiManagement#azure_tenant_id}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#enabled ApiIntegrationAzureApiManagement#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#name ApiIntegrationAzureApiManagement#name}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_blocked_prefixes ApiIntegrationAzureApiManagement#api_blocked_prefixes}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

Snowflake returns a masked value for this field in DESCRIBE output, so external changes to it cannot be detected. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#api_key ApiIntegrationAzureApiManagement#api_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#comment ApiIntegrationAzureApiManagement#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#id ApiIntegrationAzureApiManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationAzureApiManagementTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#timeouts ApiIntegrationAzureApiManagement#timeouts}

---

### ApiIntegrationAzureApiManagementDescribeOutput <a name="ApiIntegrationAzureApiManagementDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput()
```


### ApiIntegrationAzureApiManagementShowOutput <a name="ApiIntegrationAzureApiManagementShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput()
```


### ApiIntegrationAzureApiManagementTimeouts <a name="ApiIntegrationAzureApiManagementTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#create ApiIntegrationAzureApiManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#delete ApiIntegrationAzureApiManagement#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#read ApiIntegrationAzureApiManagement#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_azure_api_management#update ApiIntegrationAzureApiManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationAzureApiManagementDescribeOutputList <a name="ApiIntegrationAzureApiManagementDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationAzureApiManagementDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationAzureApiManagementDescribeOutputOutputReference <a name="ApiIntegrationAzureApiManagementDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureAdApplicationId">azure_ad_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureConsentUrl">azure_consent_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureMultiTenantAppName">azure_multi_tenant_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput">ApiIntegrationAzureApiManagementDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `azure_ad_application_id`<sup>Required</sup> <a name="azure_ad_application_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```python
azure_ad_application_id: str
```

- *Type:* str

---

##### `azure_consent_url`<sup>Required</sup> <a name="azure_consent_url" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureConsentUrl"></a>

```python
azure_consent_url: str
```

- *Type:* str

---

##### `azure_multi_tenant_app_name`<sup>Required</sup> <a name="azure_multi_tenant_app_name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```python
azure_multi_tenant_app_name: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationAzureApiManagementDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementDescribeOutput">ApiIntegrationAzureApiManagementDescribeOutput</a>

---


### ApiIntegrationAzureApiManagementShowOutputList <a name="ApiIntegrationAzureApiManagementShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationAzureApiManagementShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationAzureApiManagementShowOutputOutputReference <a name="ApiIntegrationAzureApiManagementShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput">ApiIntegrationAzureApiManagementShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationAzureApiManagementShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementShowOutput">ApiIntegrationAzureApiManagementShowOutput</a>

---


### ApiIntegrationAzureApiManagementTimeoutsOutputReference <a name="ApiIntegrationAzureApiManagementTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_azure_api_management

apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationAzureApiManagementTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationAzureApiManagement.ApiIntegrationAzureApiManagementTimeouts">ApiIntegrationAzureApiManagementTimeouts</a>

---



