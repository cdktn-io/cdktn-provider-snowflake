# `apiIntegrationGitRepositoryPrivateLink` Submodule <a name="`apiIntegrationGitRepositoryPrivateLink` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryPrivateLink <a name="ApiIntegrationGitRepositoryPrivateLink" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link snowflake_api_integration_git_repository_private_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLink(Construct Scope, string Id, ApiIntegrationGitRepositoryPrivateLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig">ApiIntegrationGitRepositoryPrivateLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiIntegrationGitRepositoryPrivateLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---

##### `ResetAllAllowedAuthenticationSecrets` <a name="ResetAllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets"></a>

```csharp
private void ResetAllAllowedAuthenticationSecrets()
```

##### `ResetAllowedAuthenticationSecrets` <a name="ResetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets"></a>

```csharp
private void ResetAllowedAuthenticationSecrets()
```

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes"></a>

```csharp
private void ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNoAllowedAuthenticationSecrets` <a name="ResetNoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets"></a>

```csharp
private void ResetNoAllowedAuthenticationSecrets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsTrustedCertificates` <a name="ResetTlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates"></a>

```csharp
private void ResetTlsTrustedCertificates()
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

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryPrivateLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryPrivateLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryPrivateLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryPrivateLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationGitRepositoryPrivateLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationGitRepositoryPrivateLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryPrivateLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput">AllAllowedAuthenticationSecretsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput">AllowedAuthenticationSecretsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput">NoAllowedAuthenticationSecretsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput">TlsTrustedCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput">UsePrivatelinkEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets">AllAllowedAuthenticationSecrets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets">NoAllowedAuthenticationSecrets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput"></a>

```csharp
public ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput"></a>

```csharp
public ApiIntegrationGitRepositoryPrivateLinkShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts"></a>

```csharp
public ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a>

---

##### `AllAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput"></a>

```csharp
public bool|IResolvable AllAllowedAuthenticationSecretsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput"></a>

```csharp
public string[] AllowedAuthenticationSecretsInput { get; }
```

- *Type:* string[]

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput"></a>

```csharp
public string[] ApiAllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput"></a>

```csharp
public string[] ApiBlockedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NoAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="NoAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput"></a>

```csharp
public bool|IResolvable NoAllowedAuthenticationSecretsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiIntegrationGitRepositoryPrivateLinkTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---

##### `TlsTrustedCertificatesInput`<sup>Optional</sup> <a name="TlsTrustedCertificatesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput"></a>

```csharp
public string[] TlsTrustedCertificatesInput { get; }
```

- *Type:* string[]

---

##### `UsePrivatelinkEndpointInput`<sup>Optional</sup> <a name="UsePrivatelinkEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput"></a>

```csharp
public bool|IResolvable UsePrivatelinkEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllAllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets"></a>

```csharp
public bool|IResolvable AllAllowedAuthenticationSecrets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets"></a>

```csharp
public string[] AllowedAuthenticationSecrets { get; }
```

- *Type:* string[]

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NoAllowedAuthenticationSecrets`<sup>Required</sup> <a name="NoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets"></a>

```csharp
public bool|IResolvable NoAllowedAuthenticationSecrets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsTrustedCertificates`<sup>Required</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates"></a>

```csharp
public string[] TlsTrustedCertificates { get; }
```

- *Type:* string[]

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint"></a>

```csharp
public bool|IResolvable UsePrivatelinkEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryPrivateLinkConfig <a name="ApiIntegrationGitRepositoryPrivateLinkConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] ApiAllowedPrefixes,
    bool|IResolvable Enabled,
    string Name,
    bool|IResolvable UsePrivatelinkEndpoint,
    bool|IResolvable AllAllowedAuthenticationSecrets = null,
    string[] AllowedAuthenticationSecrets = null,
    string[] ApiBlockedPrefixes = null,
    string Comment = null,
    string Id = null,
    bool|IResolvable NoAllowedAuthenticationSecrets = null,
    ApiIntegrationGitRepositoryPrivateLinkTimeouts Timeouts = null,
    string[] TlsTrustedCertificates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to use the private link endpoint for the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets">AllAllowedAuthenticationSecrets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>string[]</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets">NoAllowedAuthenticationSecrets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>string[]</code> | Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; set; }
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#api_allowed_prefixes ApiIntegrationGitRepositoryPrivateLink#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#enabled ApiIntegrationGitRepositoryPrivateLink#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#name ApiIntegrationGitRepositoryPrivateLink#name}

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint"></a>

```csharp
public bool|IResolvable UsePrivatelinkEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to use the private link endpoint for the git repository.

When set to true, Snowflake uses the VNet-injected endpoint for the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#use_privatelink_endpoint ApiIntegrationGitRepositoryPrivateLink#use_privatelink_endpoint}

---

##### `AllAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets"></a>

```csharp
public bool|IResolvable AllAllowedAuthenticationSecrets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#all_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#all_allowed_authentication_secrets}

---

##### `AllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets"></a>

```csharp
public string[] AllowedAuthenticationSecrets { get; set; }
```

- *Type:* string[]

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#allowed_authentication_secrets}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; set; }
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#api_blocked_prefixes ApiIntegrationGitRepositoryPrivateLink#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#comment ApiIntegrationGitRepositoryPrivateLink#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NoAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="NoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets"></a>

```csharp
public bool|IResolvable NoAllowedAuthenticationSecrets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#no_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#no_allowed_authentication_secrets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts"></a>

```csharp
public ApiIntegrationGitRepositoryPrivateLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#timeouts ApiIntegrationGitRepositoryPrivateLink#timeouts}

---

##### `TlsTrustedCertificates`<sup>Optional</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates"></a>

```csharp
public string[] TlsTrustedCertificates { get; set; }
```

- *Type:* string[]

Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link.

Only needed when the certificate is self-signed rather than signed by a certificate authority. Each entry must be a fully-qualified name of a Snowflake secret of type generic string whose value is Base64-encoded certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#tls_trusted_certificates ApiIntegrationGitRepositoryPrivateLink#tls_trusted_certificates}

---

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutput <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkDescribeOutput {

};
```


### ApiIntegrationGitRepositoryPrivateLinkShowOutput <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkShowOutput {

};
```


### ApiIntegrationGitRepositoryPrivateLinkTimeouts <a name="ApiIntegrationGitRepositoryPrivateLinkTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get"></a>

```csharp
private ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```csharp
public string AllowedAuthenticationSecrets { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider"></a>

```csharp
public string ApiProvider { get; }
```

- *Type:* string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes"></a>

```csharp
public string[] BlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TlsTrustedCertificates`<sup>Required</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```csharp
public string[] TlsTrustedCertificates { get; }
```

- *Type:* string[]

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```csharp
public IResolvable UsePrivatelinkEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationGitRepositoryPrivateLinkDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get"></a>

```csharp
private ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationGitRepositoryPrivateLinkShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiIntegrationGitRepositoryPrivateLinkTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---



