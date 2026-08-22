# `apiIntegrationGitRepositoryOauth2` Submodule <a name="`apiIntegrationGitRepositoryOauth2` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryOauth2 <a name="ApiIntegrationGitRepositoryOauth2" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2 snowflake_api_integration_git_repository_oauth2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2(Construct Scope, string Id, ApiIntegrationGitRepositoryOauth2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config">ApiIntegrationGitRepositoryOauth2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config">ApiIntegrationGitRepositoryOauth2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetApiBlockedPrefixes">ResetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthAccessTokenValidity">ResetOauthAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthAllowedScopes">ResetOauthAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthRefreshTokenValidity">ResetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthUsername">ResetOauthUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiIntegrationGitRepositoryOauth2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a>

---

##### `ResetApiBlockedPrefixes` <a name="ResetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetApiBlockedPrefixes"></a>

```csharp
private void ResetApiBlockedPrefixes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOauthAccessTokenValidity` <a name="ResetOauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthAccessTokenValidity"></a>

```csharp
private void ResetOauthAccessTokenValidity()
```

##### `ResetOauthAllowedScopes` <a name="ResetOauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthAllowedScopes"></a>

```csharp
private void ResetOauthAllowedScopes()
```

##### `ResetOauthRefreshTokenValidity` <a name="ResetOauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthRefreshTokenValidity"></a>

```csharp
private void ResetOauthRefreshTokenValidity()
```

##### `ResetOauthUsername` <a name="ResetOauthUsername" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetOauthUsername"></a>

```csharp
private void ResetOauthUsername()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryOauth2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryOauth2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryOauth2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryOauth2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ApiIntegrationGitRepositoryOauth2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryOauth2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationGitRepositoryOauth2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationGitRepositoryOauth2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryOauth2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList">ApiIntegrationGitRepositoryOauth2DescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList">ApiIntegrationGitRepositoryOauth2ShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference">ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiAllowedPrefixesInput">ApiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiBlockedPrefixesInput">ApiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAccessTokenValidityInput">OauthAccessTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAllowedScopesInput">OauthAllowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAuthorizationEndpointInput">OauthAuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthRefreshTokenValidityInput">OauthRefreshTokenValidityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthTokenEndpointInput">OauthTokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthUsernameInput">OauthUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthUsername">OauthUsername</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.describeOutput"></a>

```csharp
public ApiIntegrationGitRepositoryOauth2DescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList">ApiIntegrationGitRepositoryOauth2DescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.showOutput"></a>

```csharp
public ApiIntegrationGitRepositoryOauth2ShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList">ApiIntegrationGitRepositoryOauth2ShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.timeouts"></a>

```csharp
public ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference">ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference</a>

---

##### `ApiAllowedPrefixesInput`<sup>Optional</sup> <a name="ApiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiAllowedPrefixesInput"></a>

```csharp
public string[] ApiAllowedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixesInput`<sup>Optional</sup> <a name="ApiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiBlockedPrefixesInput"></a>

```csharp
public string[] ApiBlockedPrefixesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidityInput`<sup>Optional</sup> <a name="OauthAccessTokenValidityInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAccessTokenValidityInput"></a>

```csharp
public double OauthAccessTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthAllowedScopesInput`<sup>Optional</sup> <a name="OauthAllowedScopesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAllowedScopesInput"></a>

```csharp
public string[] OauthAllowedScopesInput { get; }
```

- *Type:* string[]

---

##### `OauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="OauthAuthorizationEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAuthorizationEndpointInput"></a>

```csharp
public string OauthAuthorizationEndpointInput { get; }
```

- *Type:* string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientIdInput"></a>

```csharp
public string OauthClientIdInput { get; }
```

- *Type:* string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientSecretInput"></a>

```csharp
public string OauthClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="OauthRefreshTokenValidityInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthRefreshTokenValidityInput"></a>

```csharp
public double OauthRefreshTokenValidityInput { get; }
```

- *Type:* double

---

##### `OauthTokenEndpointInput`<sup>Optional</sup> <a name="OauthTokenEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthTokenEndpointInput"></a>

```csharp
public string OauthTokenEndpointInput { get; }
```

- *Type:* string

---

##### `OauthUsernameInput`<sup>Optional</sup> <a name="OauthUsernameInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthUsernameInput"></a>

```csharp
public string OauthUsernameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiIntegrationGitRepositoryOauth2Timeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a>

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiBlockedPrefixes`<sup>Required</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; }
```

- *Type:* double

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; }
```

- *Type:* string[]

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthAuthorizationEndpoint"></a>

```csharp
public string OauthAuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; }
```

- *Type:* double

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; }
```

- *Type:* string

---

##### `OauthUsername`<sup>Required</sup> <a name="OauthUsername" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.oauthUsername"></a>

```csharp
public string OauthUsername { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryOauth2Config <a name="ApiIntegrationGitRepositoryOauth2Config" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2Config {
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
    string OauthAuthorizationEndpoint,
    string OauthClientId,
    string OauthClientSecret,
    string OauthTokenEndpoint,
    string[] ApiBlockedPrefixes = null,
    string Comment = null,
    string Id = null,
    double OauthAccessTokenValidity = null,
    string[] OauthAllowedScopes = null,
    double OauthRefreshTokenValidity = null,
    string OauthUsername = null,
    ApiIntegrationGitRepositoryOauth2Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.apiAllowedPrefixes">ApiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.name">Name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>string</code> | The OAuth 2.0 authorization endpoint for the Git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | The client ID for the OAuth 2.0 application. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | The client secret for the OAuth 2.0 application. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | The OAuth 2.0 token endpoint for the Git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.apiBlockedPrefixes">ApiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#id ApiIntegrationGitRepositoryOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | Specifies the validity period (in seconds) for the OAuth 2.0 access token. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | Specifies the validity period (in seconds) for the OAuth 2.0 refresh token. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthUsername">OauthUsername</a></code> | <code>string</code> | Specifies the username to authenticate with the Git repository using OAuth 2.0. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiAllowedPrefixes`<sup>Required</sup> <a name="ApiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.apiAllowedPrefixes"></a>

```csharp
public string[] ApiAllowedPrefixes { get; set; }
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#api_allowed_prefixes ApiIntegrationGitRepositoryOauth2#api_allowed_prefixes}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#enabled ApiIntegrationGitRepositoryOauth2#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#name ApiIntegrationGitRepositoryOauth2#name}

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthAuthorizationEndpoint"></a>

```csharp
public string OauthAuthorizationEndpoint { get; set; }
```

- *Type:* string

The OAuth 2.0 authorization endpoint for the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_authorization_endpoint ApiIntegrationGitRepositoryOauth2#oauth_authorization_endpoint}

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; set; }
```

- *Type:* string

The client ID for the OAuth 2.0 application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_client_id ApiIntegrationGitRepositoryOauth2#oauth_client_id}

---

##### `OauthClientSecret`<sup>Required</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; set; }
```

- *Type:* string

The client secret for the OAuth 2.0 application. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_client_secret ApiIntegrationGitRepositoryOauth2#oauth_client_secret}

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; set; }
```

- *Type:* string

The OAuth 2.0 token endpoint for the Git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_token_endpoint ApiIntegrationGitRepositoryOauth2#oauth_token_endpoint}

---

##### `ApiBlockedPrefixes`<sup>Optional</sup> <a name="ApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.apiBlockedPrefixes"></a>

```csharp
public string[] ApiBlockedPrefixes { get; set; }
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#api_blocked_prefixes ApiIntegrationGitRepositoryOauth2#api_blocked_prefixes}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#comment ApiIntegrationGitRepositoryOauth2#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#id ApiIntegrationGitRepositoryOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OauthAccessTokenValidity`<sup>Optional</sup> <a name="OauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; set; }
```

- *Type:* double

Specifies the validity period (in seconds) for the OAuth 2.0 access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_access_token_validity ApiIntegrationGitRepositoryOauth2#oauth_access_token_validity}

---

##### `OauthAllowedScopes`<sup>Optional</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; set; }
```

- *Type:* string[]

Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration.

Valid values are (case-insensitive): `read_api` | `read_repository` | `write_repository`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_allowed_scopes ApiIntegrationGitRepositoryOauth2#oauth_allowed_scopes}

---

##### `OauthRefreshTokenValidity`<sup>Optional</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; set; }
```

- *Type:* double

Specifies the validity period (in seconds) for the OAuth 2.0 refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_refresh_token_validity ApiIntegrationGitRepositoryOauth2#oauth_refresh_token_validity}

---

##### `OauthUsername`<sup>Optional</sup> <a name="OauthUsername" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.oauthUsername"></a>

```csharp
public string OauthUsername { get; set; }
```

- *Type:* string

Specifies the username to authenticate with the Git repository using OAuth 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#oauth_username ApiIntegrationGitRepositoryOauth2#oauth_username}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Config.property.timeouts"></a>

```csharp
public ApiIntegrationGitRepositoryOauth2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#timeouts ApiIntegrationGitRepositoryOauth2#timeouts}

---

### ApiIntegrationGitRepositoryOauth2DescribeOutput <a name="ApiIntegrationGitRepositoryOauth2DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2DescribeOutput {

};
```


### ApiIntegrationGitRepositoryOauth2ShowOutput <a name="ApiIntegrationGitRepositoryOauth2ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2ShowOutput {

};
```


### ApiIntegrationGitRepositoryOauth2Timeouts <a name="ApiIntegrationGitRepositoryOauth2Timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2Timeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#create ApiIntegrationGitRepositoryOauth2#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#delete ApiIntegrationGitRepositoryOauth2#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#read ApiIntegrationGitRepositoryOauth2#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#update ApiIntegrationGitRepositoryOauth2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#create ApiIntegrationGitRepositoryOauth2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#delete ApiIntegrationGitRepositoryOauth2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#read ApiIntegrationGitRepositoryOauth2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_oauth2#update ApiIntegrationGitRepositoryOauth2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryOauth2DescribeOutputList <a name="ApiIntegrationGitRepositoryOauth2DescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2DescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.get"></a>

```csharp
private ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthUsername">OauthUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.userAuthType">UserAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutput">ApiIntegrationGitRepositoryOauth2DescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.blockedPrefixes"></a>

```csharp
public string[] BlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; }
```

- *Type:* double

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; }
```

- *Type:* string[]

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```csharp
public string OauthAuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; }
```

- *Type:* double

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; }
```

- *Type:* string

---

##### `OauthUsername`<sup>Required</sup> <a name="OauthUsername" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.oauthUsername"></a>

```csharp
public string OauthUsername { get; }
```

- *Type:* string

---

##### `UserAuthType`<sup>Required</sup> <a name="UserAuthType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.userAuthType"></a>

```csharp
public string UserAuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationGitRepositoryOauth2DescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2DescribeOutput">ApiIntegrationGitRepositoryOauth2DescribeOutput</a>

---


### ApiIntegrationGitRepositoryOauth2ShowOutputList <a name="ApiIntegrationGitRepositoryOauth2ShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2ShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.get"></a>

```csharp
private ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference <a name="ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutput">ApiIntegrationGitRepositoryOauth2ShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutputOutputReference.property.internalValue"></a>

```csharp
public ApiIntegrationGitRepositoryOauth2ShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2ShowOutput">ApiIntegrationGitRepositoryOauth2ShowOutput</a>

---


### ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference <a name="ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiIntegrationGitRepositoryOauth2Timeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryOauth2.ApiIntegrationGitRepositoryOauth2Timeouts">ApiIntegrationGitRepositoryOauth2Timeouts</a>

---



