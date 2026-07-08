# `apiIntegrationGitRepositoryPrivateLink` Submodule <a name="`apiIntegrationGitRepositoryPrivateLink` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryPrivateLink <a name="ApiIntegrationGitRepositoryPrivateLink" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link snowflake_api_integration_git_repository_private_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink(
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
  use_privatelink_endpoint: bool | IResolvable,
  all_allowed_authentication_secrets: bool | IResolvable = None,
  allowed_authentication_secrets: typing.List[str] = None,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  no_allowed_authentication_secrets: bool | IResolvable = None,
  timeouts: ApiIntegrationGitRepositoryPrivateLinkTimeouts = None,
  tls_trusted_certificates: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to use the private link endpoint for the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.allAllowedAuthenticationSecrets">all_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.noAllowedAuthenticationSecrets">no_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.tlsTrustedCertificates">tls_trusted_certificates</a></code> | <code>typing.List[str]</code> | Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#api_allowed_prefixes ApiIntegrationGitRepositoryPrivateLink#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#enabled ApiIntegrationGitRepositoryPrivateLink#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#name ApiIntegrationGitRepositoryPrivateLink#name}

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.usePrivatelinkEndpoint"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to use the private link endpoint for the git repository.

When set to true, Snowflake uses the VNet-injected endpoint for the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#use_privatelink_endpoint ApiIntegrationGitRepositoryPrivateLink#use_privatelink_endpoint}

---

##### `all_allowed_authentication_secrets`<sup>Optional</sup> <a name="all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.allAllowedAuthenticationSecrets"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#all_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#all_allowed_authentication_secrets}

---

##### `allowed_authentication_secrets`<sup>Optional</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.allowedAuthenticationSecrets"></a>

- *Type:* typing.List[str]

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#allowed_authentication_secrets}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#api_blocked_prefixes ApiIntegrationGitRepositoryPrivateLink#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#comment ApiIntegrationGitRepositoryPrivateLink#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_allowed_authentication_secrets`<sup>Optional</sup> <a name="no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.noAllowedAuthenticationSecrets"></a>

- *Type:* bool | cdktn.IResolvable

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#no_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#no_allowed_authentication_secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#timeouts ApiIntegrationGitRepositoryPrivateLink#timeouts}

---

##### `tls_trusted_certificates`<sup>Optional</sup> <a name="tls_trusted_certificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.tlsTrustedCertificates"></a>

- *Type:* typing.List[str]

Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link.

Only needed when the certificate is self-signed rather than signed by a certificate authority. Each entry must be a fully-qualified name of a Snowflake secret of type generic string whose value is Base64-encoded certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#tls_trusted_certificates ApiIntegrationGitRepositoryPrivateLink#tls_trusted_certificates}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets">reset_all_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets">reset_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes">reset_api_blocked_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets">reset_no_allowed_authentication_secrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates">reset_tls_trusted_certificates</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}.

---

##### `reset_all_allowed_authentication_secrets` <a name="reset_all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets"></a>

```python
def reset_all_allowed_authentication_secrets() -> None
```

##### `reset_allowed_authentication_secrets` <a name="reset_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets"></a>

```python
def reset_allowed_authentication_secrets() -> None
```

##### `reset_api_blocked_prefixes` <a name="reset_api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes"></a>

```python
def reset_api_blocked_prefixes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_no_allowed_authentication_secrets` <a name="reset_no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets"></a>

```python
def reset_no_allowed_authentication_secrets() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_trusted_certificates` <a name="reset_tls_trusted_certificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates"></a>

```python
def reset_tls_trusted_certificates() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiIntegrationGitRepositoryPrivateLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiIntegrationGitRepositoryPrivateLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryPrivateLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput">all_allowed_authentication_secrets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput">allowed_authentication_secrets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput">api_allowed_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput">api_blocked_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput">no_allowed_authentication_secrets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput">tls_trusted_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput">use_privatelink_endpoint_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets">all_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets">no_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates">tls_trusted_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput"></a>

```python
describe_output: ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput"></a>

```python
show_output: ApiIntegrationGitRepositoryPrivateLinkShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts"></a>

```python
timeouts: ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a>

---

##### `all_allowed_authentication_secrets_input`<sup>Optional</sup> <a name="all_allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput"></a>

```python
all_allowed_authentication_secrets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_authentication_secrets_input`<sup>Optional</sup> <a name="allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput"></a>

```python
allowed_authentication_secrets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_allowed_prefixes_input`<sup>Optional</sup> <a name="api_allowed_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput"></a>

```python
api_allowed_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes_input`<sup>Optional</sup> <a name="api_blocked_prefixes_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput"></a>

```python
api_blocked_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `no_allowed_authentication_secrets_input`<sup>Optional</sup> <a name="no_allowed_authentication_secrets_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput"></a>

```python
no_allowed_authentication_secrets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApiIntegrationGitRepositoryPrivateLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---

##### `tls_trusted_certificates_input`<sup>Optional</sup> <a name="tls_trusted_certificates_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput"></a>

```python
tls_trusted_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_privatelink_endpoint_input`<sup>Optional</sup> <a name="use_privatelink_endpoint_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput"></a>

```python
use_privatelink_endpoint_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `all_allowed_authentication_secrets`<sup>Required</sup> <a name="all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets"></a>

```python
all_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_blocked_prefixes`<sup>Required</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `no_allowed_authentication_secrets`<sup>Required</sup> <a name="no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets"></a>

```python
no_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tls_trusted_certificates`<sup>Required</sup> <a name="tls_trusted_certificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates"></a>

```python
tls_trusted_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryPrivateLinkConfig <a name="ApiIntegrationGitRepositoryPrivateLinkConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig(
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
  use_privatelink_endpoint: bool | IResolvable,
  all_allowed_authentication_secrets: bool | IResolvable = None,
  allowed_authentication_secrets: typing.List[str] = None,
  api_blocked_prefixes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  no_allowed_authentication_secrets: bool | IResolvable = None,
  timeouts: ApiIntegrationGitRepositoryPrivateLinkTimeouts = None,
  tls_trusted_certificates: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes">api_allowed_prefixes</a></code> | <code>typing.List[str]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to use the private link endpoint for the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets">all_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>typing.List[str]</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes">api_blocked_prefixes</a></code> | <code>typing.List[str]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets">no_allowed_authentication_secrets</a></code> | <code>bool \| cdktn.IResolvable</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates">tls_trusted_certificates</a></code> | <code>typing.List[str]</code> | Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_allowed_prefixes`<sup>Required</sup> <a name="api_allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes"></a>

```python
api_allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#api_allowed_prefixes ApiIntegrationGitRepositoryPrivateLink#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#enabled ApiIntegrationGitRepositoryPrivateLink#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#name ApiIntegrationGitRepositoryPrivateLink#name}

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to use the private link endpoint for the git repository.

When set to true, Snowflake uses the VNet-injected endpoint for the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#use_privatelink_endpoint ApiIntegrationGitRepositoryPrivateLink#use_privatelink_endpoint}

---

##### `all_allowed_authentication_secrets`<sup>Optional</sup> <a name="all_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets"></a>

```python
all_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#all_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#all_allowed_authentication_secrets}

---

##### `allowed_authentication_secrets`<sup>Optional</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: typing.List[str]
```

- *Type:* typing.List[str]

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#allowed_authentication_secrets}

---

##### `api_blocked_prefixes`<sup>Optional</sup> <a name="api_blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes"></a>

```python
api_blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#api_blocked_prefixes ApiIntegrationGitRepositoryPrivateLink#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#comment ApiIntegrationGitRepositoryPrivateLink#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `no_allowed_authentication_secrets`<sup>Optional</sup> <a name="no_allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets"></a>

```python
no_allowed_authentication_secrets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#no_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#no_allowed_authentication_secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts"></a>

```python
timeouts: ApiIntegrationGitRepositoryPrivateLinkTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#timeouts ApiIntegrationGitRepositoryPrivateLink#timeouts}

---

##### `tls_trusted_certificates`<sup>Optional</sup> <a name="tls_trusted_certificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates"></a>

```python
tls_trusted_certificates: typing.List[str]
```

- *Type:* typing.List[str]

Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link.

Only needed when the certificate is self-signed rather than signed by a certificate authority. Each entry must be a fully-qualified name of a Snowflake secret of type generic string whose value is Base64-encoded certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#tls_trusted_certificates ApiIntegrationGitRepositoryPrivateLink#tls_trusted_certificates}

---

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutput <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput()
```


### ApiIntegrationGitRepositoryPrivateLinkShowOutput <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput()
```


### ApiIntegrationGitRepositoryPrivateLinkTimeouts <a name="ApiIntegrationGitRepositoryPrivateLinkTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.18.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowed_authentication_secrets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes">allowed_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider">api_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes">blocked_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates">tls_trusted_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint">use_privatelink_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_authentication_secrets`<sup>Required</sup> <a name="allowed_authentication_secrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```python
allowed_authentication_secrets: str
```

- *Type:* str

---

##### `allowed_prefixes`<sup>Required</sup> <a name="allowed_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes"></a>

```python
allowed_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_provider`<sup>Required</sup> <a name="api_provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider"></a>

```python
api_provider: str
```

- *Type:* str

---

##### `blocked_prefixes`<sup>Required</sup> <a name="blocked_prefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes"></a>

```python
blocked_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tls_trusted_certificates`<sup>Required</sup> <a name="tls_trusted_certificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```python
tls_trusted_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_privatelink_endpoint`<sup>Required</sup> <a name="use_privatelink_endpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```python
use_privatelink_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGitRepositoryPrivateLinkDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ApiIntegrationGitRepositoryPrivateLinkShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import api_integration_git_repository_private_link

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiIntegrationGitRepositoryPrivateLinkTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---



