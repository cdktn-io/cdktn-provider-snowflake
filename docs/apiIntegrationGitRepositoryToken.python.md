# `apiIntegrationGitRepositoryToken` Submodule <a name="`apiIntegrationGitRepositoryToken` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryToken <a name="ApiIntegrationGitRepositoryToken" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token snowflake_api_integration_git_repository_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken(
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
  name: str,
  all_allowed_authentication_secrets: bool | IResolvable = None,
  allowed_authentication_secrets: typing.List[str] = None,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  no_allowed_authentication_secrets: bool | IResolvable = None,
  timeouts: ApiIntegrationGitRepositoryTokenTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.allAllowedAuthenticationSecrets">all_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.noAllowedAuthenticationSecrets">no_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#api_allowed_prefixes ApiIntegrationGitRepositoryToken#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#enabled ApiIntegrationGitRepositoryToken#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#name ApiIntegrationGitRepositoryToken#name}

---

##### `all_allowed_authentication_secrets`<sup>Optional</sup> <a name="all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.allAllowedAuthenticationSecrets"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#all_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#all_allowed_authentication_secrets}

---

##### `allowed_authentication_secrets`<sup>Optional</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.allowedAuthenticationSecrets"></a>

- *Type:* typing.List[str]

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#allowed_authentication_secrets ApiIntegrationGitRepositoryToken#allowed_authentication_secrets}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#api_blocked_prefixes ApiIntegrationGitRepositoryToken#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#comment ApiIntegrationGitRepositoryToken#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_allowed_authentication_secrets`<sup>Optional</sup> <a name="no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.noAllowedAuthenticationSecrets"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#no_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#no_allowed_authentication_secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#timeouts ApiIntegrationGitRepositoryToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllAllowedAuthenticationSecrets">reset_all_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllowedAuthenticationSecrets">reset_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetNoAllowedAuthenticationSecrets">reset_no_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#create ApiIntegrationGitRepositoryToken#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#delete ApiIntegrationGitRepositoryToken#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#read ApiIntegrationGitRepositoryToken#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#update ApiIntegrationGitRepositoryToken#update}.

---

##### `reset_all_allowed_authentication_secrets` <a name="reset_all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllAllowedAuthenticationSecrets"></a>

```python
def reset_all_allowed_authentication_secrets() -> None
```

##### `reset_allowed_authentication_secrets` <a name="reset_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetAllowedAuthenticationSecrets"></a>

```python
def reset_allowed_authentication_secrets() -> None
```

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_no_allowed_authentication_secrets` <a name="reset_no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetNoAllowedAuthenticationSecrets"></a>

```python
def reset_no_allowed_authentication_secrets() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationGitRepositoryToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationGitRepositoryToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList">ApiIntegrationGitRepositoryTokenDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList">ApiIntegrationGitRepositoryTokenShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference">ApiIntegrationGitRepositoryTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecretsInput">all_allowed_authentication_secrets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecretsInput">allowed_authentication_secrets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecretsInput">no_allowed_authentication_secrets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecrets">all_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecrets">no_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.describeOutput"></a>

```python
describe_output: ApiIntegrationGitRepositoryTokenDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList">ApiIntegrationGitRepositoryTokenDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.showOutput"></a>

```python
show_output: ApiIntegrationGitRepositoryTokenShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList">ApiIntegrationGitRepositoryTokenShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeouts"></a>

```python
timeouts: ApiIntegrationGitRepositoryTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference">ApiIntegrationGitRepositoryTokenTimeoutsOutputReference</a>

---

##### `all_allowed_authentication_secrets_input`<sup>Optional</sup> <a name="all_allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecretsInput"></a>

```python
all_allowed_authentication_secrets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_authentication_secrets_input`<sup>Optional</sup> <a name="allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecretsInput"></a>

```python
allowed_authentication_secrets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `no_allowed_authentication_secrets_input`<sup>Optional</sup> <a name="no_allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecretsInput"></a>

```python
no_allowed_authentication_secrets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationGitRepositoryTokenTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a>

---

##### `all_allowed_authentication_secrets`<sup>Required</sup> <a name="all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allAllowedAuthenticationSecrets"></a>

```python
all_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `no_allowed_authentication_secrets`<sup>Required</sup> <a name="no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.noAllowedAuthenticationSecrets"></a>

```python
no_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryTokenConfig <a name="ApiIntegrationGitRepositoryTokenConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_allowed_prefixes: typing.List[str],
  enabled: bool | IResolvable,
  name: str,
  all_allowed_authentication_secrets: bool | IResolvable = None,
  allowed_authentication_secrets: typing.List[str] = None,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  no_allowed_authentication_secrets: bool | IResolvable = None,
  timeouts: ApiIntegrationGitRepositoryTokenTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allAllowedAuthenticationSecrets">all_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.noAllowedAuthenticationSecrets">no_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#api_allowed_prefixes ApiIntegrationGitRepositoryToken#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#enabled ApiIntegrationGitRepositoryToken#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#name ApiIntegrationGitRepositoryToken#name}

---

##### `all_allowed_authentication_secrets`<sup>Optional</sup> <a name="all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allAllowedAuthenticationSecrets"></a>

```python
all_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#all_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#all_allowed_authentication_secrets}

---

##### `allowed_authentication_secrets`<sup>Optional</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: typing.List[str]
```

- *Type:* typing.List[str]

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#allowed_authentication_secrets ApiIntegrationGitRepositoryToken#allowed_authentication_secrets}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#api_blocked_prefixes ApiIntegrationGitRepositoryToken#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#comment ApiIntegrationGitRepositoryToken#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#id ApiIntegrationGitRepositoryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_allowed_authentication_secrets`<sup>Optional</sup> <a name="no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.noAllowedAuthenticationSecrets"></a>

```python
no_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#no_allowed_authentication_secrets ApiIntegrationGitRepositoryToken#no_allowed_authentication_secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationGitRepositoryTokenTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#timeouts ApiIntegrationGitRepositoryToken#timeouts}

---

### ApiIntegrationGitRepositoryTokenDescribeOutput <a name="ApiIntegrationGitRepositoryTokenDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput()
```


### ApiIntegrationGitRepositoryTokenShowOutput <a name="ApiIntegrationGitRepositoryTokenShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput()
```


### ApiIntegrationGitRepositoryTokenTimeouts <a name="ApiIntegrationGitRepositoryTokenTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#create ApiIntegrationGitRepositoryToken#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#delete ApiIntegrationGitRepositoryToken#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#read ApiIntegrationGitRepositoryToken#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#update ApiIntegrationGitRepositoryToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#create ApiIntegrationGitRepositoryToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#delete ApiIntegrationGitRepositoryToken#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#read ApiIntegrationGitRepositoryToken#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_token#update ApiIntegrationGitRepositoryToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryTokenDescribeOutputList <a name="ApiIntegrationGitRepositoryTokenDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput">ApiIntegrationGitRepositoryTokenDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGitRepositoryTokenDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenDescribeOutput">ApiIntegrationGitRepositoryTokenDescribeOutput</a>

---


### ApiIntegrationGitRepositoryTokenShowOutputList <a name="ApiIntegrationGitRepositoryTokenShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGitRepositoryTokenShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGitRepositoryTokenShowOutputOutputReference <a name="ApiIntegrationGitRepositoryTokenShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput">ApiIntegrationGitRepositoryTokenShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGitRepositoryTokenShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenShowOutput">ApiIntegrationGitRepositoryTokenShowOutput</a>

---


### ApiIntegrationGitRepositoryTokenTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryTokenTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_token

apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationGitRepositoryTokenTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryToken.ApiIntegrationGitRepositoryTokenTimeouts">ApiIntegrationGitRepositoryTokenTimeouts</a>

---



