# `apiIntegrationGitRepositoryGithubApp` Submodule <a name="`apiIntegrationGitRepositoryGithubApp` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryGithubApp <a name="ApiIntegrationGitRepositoryGithubApp" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app snowflake_api_integration_git_repository_github_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp(
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
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationGitRepositoryGithubAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#id ApiIntegrationGitRepositoryGithubApp#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#api_allowed_prefixes ApiIntegrationGitRepositoryGithubApp#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#enabled ApiIntegrationGitRepositoryGithubApp#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#name ApiIntegrationGitRepositoryGithubApp#name}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#api_blocked_prefixes ApiIntegrationGitRepositoryGithubApp#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#comment ApiIntegrationGitRepositoryGithubApp#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#id ApiIntegrationGitRepositoryGithubApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#timeouts ApiIntegrationGitRepositoryGithubApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#create ApiIntegrationGitRepositoryGithubApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#delete ApiIntegrationGitRepositoryGithubApp#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#read ApiIntegrationGitRepositoryGithubApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#update ApiIntegrationGitRepositoryGithubApp#update}.

---

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryGithubApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryGithubApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationGitRepositoryGithubApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationGitRepositoryGithubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryGithubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList">ApiIntegrationGitRepositoryGithubAppDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList">ApiIntegrationGitRepositoryGithubAppShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference">ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.describeOutput"></a>

```python
describe_output: ApiIntegrationGitRepositoryGithubAppDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList">ApiIntegrationGitRepositoryGithubAppDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.showOutput"></a>

```python
show_output: ApiIntegrationGitRepositoryGithubAppShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList">ApiIntegrationGitRepositoryGithubAppShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.timeouts"></a>

```python
timeouts: ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference">ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference</a>

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationGitRepositoryGithubAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a>

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryGithubAppConfig <a name="ApiIntegrationGitRepositoryGithubAppConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig(
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
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: ApiIntegrationGitRepositoryGithubAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#id ApiIntegrationGitRepositoryGithubApp#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#api_allowed_prefixes ApiIntegrationGitRepositoryGithubApp#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#enabled ApiIntegrationGitRepositoryGithubApp#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#name ApiIntegrationGitRepositoryGithubApp#name}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#api_blocked_prefixes ApiIntegrationGitRepositoryGithubApp#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#comment ApiIntegrationGitRepositoryGithubApp#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#id ApiIntegrationGitRepositoryGithubApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationGitRepositoryGithubAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#timeouts ApiIntegrationGitRepositoryGithubApp#timeouts}

---

### ApiIntegrationGitRepositoryGithubAppDescribeOutput <a name="ApiIntegrationGitRepositoryGithubAppDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutput()
```


### ApiIntegrationGitRepositoryGithubAppShowOutput <a name="ApiIntegrationGitRepositoryGithubAppShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutput()
```


### ApiIntegrationGitRepositoryGithubAppTimeouts <a name="ApiIntegrationGitRepositoryGithubAppTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#create ApiIntegrationGitRepositoryGithubApp#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#delete ApiIntegrationGitRepositoryGithubApp#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#read ApiIntegrationGitRepositoryGithubApp#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#update ApiIntegrationGitRepositoryGithubApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#create ApiIntegrationGitRepositoryGithubApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#delete ApiIntegrationGitRepositoryGithubApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#read ApiIntegrationGitRepositoryGithubApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_git_repository_github_app#update ApiIntegrationGitRepositoryGithubApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryGithubAppDescribeOutputList <a name="ApiIntegrationGitRepositoryGithubAppDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.userAuthType">user_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutput">ApiIntegrationGitRepositoryGithubAppDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `user_auth_type`<sup>Required</sup> <a name="user_auth_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.userAuthType"></a>

```python
user_auth_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGitRepositoryGithubAppDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppDescribeOutput">ApiIntegrationGitRepositoryGithubAppDescribeOutput</a>

---


### ApiIntegrationGitRepositoryGithubAppShowOutputList <a name="ApiIntegrationGitRepositoryGithubAppShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference <a name="ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutput">ApiIntegrationGitRepositoryGithubAppShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGitRepositoryGithubAppShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppShowOutput">ApiIntegrationGitRepositoryGithubAppShowOutput</a>

---


### ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_github_app

apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationGitRepositoryGithubAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryGithubApp.ApiIntegrationGitRepositoryGithubAppTimeouts">ApiIntegrationGitRepositoryGithubAppTimeouts</a>

---



